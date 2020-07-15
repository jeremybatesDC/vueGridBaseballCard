import { w as wrap, r as replaceTraps } from "./idb-wrap-val.js";
export { u as unwrap, w as wrap } from "./idb-wrap-val.js";

/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(
  name,
  version,
  { blocked, upgrade, blocking, terminated } = {}
) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(
        wrap(request.result),
        event.oldVersion,
        event.newVersion,
        wrap(request.transaction)
      );
    });
  }
  if (blocked) request.addEventListener("blocked", () => blocked());
  openPromise
    .then((db) => {
      if (terminated) db.addEventListener("close", () => terminated());
      if (blocking) db.addEventListener("versionchange", () => blocking());
    })
    .catch(() => {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener("blocked", () => blocked());
  return wrap(request).then(() => undefined);
}

const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = new Map();
function getMethod(target, prop) {
  if (
    !(
      target instanceof IDBDatabase &&
      !(prop in target) &&
      typeof prop === "string"
    )
  ) {
    return;
  }
  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
    !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function (storeName, ...args) {
    // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target = tx.store;
    if (useIndex) target = target.index(args.shift());
    const returnVal = await target[targetFuncName](...args);
    if (isWrite) await tx.done;
    return returnVal;
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) =>
    getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) =>
    !!getMethod(target, prop) || oldTraps.has(target, prop),
}));

export { deleteDB, openDB };
