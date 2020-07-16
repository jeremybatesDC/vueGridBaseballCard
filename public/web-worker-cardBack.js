import { set } from "idb-keyval";

onmessage = function (event) {
  // The object that the web page sent is stored in the event.data property.
  console.log("web worker received the following message: ", event.data);
  talkToIDB(event);
  postMessage("thank you from web worker");
};

async function talkToIDB(event) {
  console.log("this function will async communicate with IDB");
  set("testFieldFromWebWorker", "test Field From Web Worker")
    .then(() => console.log("webworker to IDB success!"))
    .catch((err) => console.log("webworker to IDB fail", err));
}
