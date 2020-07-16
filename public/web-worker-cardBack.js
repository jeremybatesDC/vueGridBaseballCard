onmessage = function (event) {
  // The object that the web page sent is stored in the event.data property.
  console.log("web worker received the following message: ", event.data);
  postMessage("thank you from web worker");
};
