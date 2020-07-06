const superSecretKey = "95a42b9844224d8baf671236a06d08f2";
const imgURL =
  "https://securea.mlb.com/mlb/images/players/head_shot/543685.jpg";

const dataToSend = { url: imgURL };

const endpointURL =
  "https://eastus.api.cognitive.microsoft.com/vision/v3.0/analyze?visualFeatures=Categories&language=en";
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Ocp-Apim-Subscription-Key": superSecretKey,
    },
    body: JSON.stringify(dataToSend),
    // learn these other options
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", (see more)
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
async function meowMix() {
  // using THIS sends whole data object (saves a bunch of imperative code)
  postData(endpointURL)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("DOH! ", error);
    });
}

document.addEventListener("dblclick", meowMix);
