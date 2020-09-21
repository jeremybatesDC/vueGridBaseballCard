const endpointURL = "https://reqres.in/api/users";

onmessage = function (event) {
  var dataReceived = event.data;
  postData(endpointURL, dataReceived)
    .then((data) => {
      // postMessage goes back to ui thread
      postMessage("sent");
    })
    .catch((error) => {
      console.error("DOH! ", error);
    });
};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
    // learn these other options
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", (see more)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
