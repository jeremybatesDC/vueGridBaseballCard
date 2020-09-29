onmessage = (event, evntTrgtID) => {
  // The object that the web page sent is stored in the event.data property.
  let reader = new FileReader();
  reader.readAsDataURL(event.data);
  reader.onload = (e) => {
    postMessage(e.target.result);
  };
};
