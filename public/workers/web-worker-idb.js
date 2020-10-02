import { set } from "idb-keyval";

onmessage = (event) => {
  // The object that the web page sent is stored in the event.data property.
  console.log("web worker received the following message: ", event.data);
  talkToIDB(event.data);
  postMessage("thank you from web worker!");
};

async function talkToIDB(theData) {
  console.log("this function will async communicate with IDB", theData);
  set("testFieldFromWebWorker2", theData)
    .then(() => console.log("webworker to IDB success!"))
    .catch((err) => console.log("webworker to IDB fail", err));
}
