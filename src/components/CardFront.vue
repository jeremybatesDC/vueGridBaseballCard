<template>
  <div id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">
    <CardFrontConfigurableV1 />

    <button type="button" @click="saveHandler">Save</button>
    <button type="button" @click="submitHandler">Submit</button>
  </div>
</template>

<script lang="ts">
// typescript working out of box in vite

// can we make this import ASYNC?
//import placeholderEncodedImage from "/json/placeholder-image.json";
import defaultSettings from "/json/default-settings.json";
import CardFrontConfigurableV1 from "./InputChildComponents/CardFrontConfigurableV1.vue";

var webWorkerEncode = new Worker("./workers/web-worker-encode.js", {
  type: "module",
});
var webWorkerFetch = new Worker("./workers/web-worker-fetch.js", {
  type: "module",
});

// any reason not to fire up web worker at the beginning?

// async function submitHandler() {
//   console.log(event);
//   webWorkerFetch.postMessage(defaultSettings, this.data);
//   webWorkerFetch.onmessage = function(event) {
//     console.log(
//       event.data,
//       "card front here thanking web worker fetch for its help"
//     );
//   };
// }
async function saveHandler() {
  console.log("this should force a save to localstorage");
}
function setFromLocalStorage() {
  for (let key in localStorage) {
    if (localStorage[key]) {
      this[key] = localStorage[key];
    }
  }
}

// can constrain the ACCEPT attribute  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file

// async function validateImage(imageFileToValidate) {
//   const maxFileSize = 1;
//   if (imageFileToValidate.size < maxFileSize) {
//     console.log("okay go ahead");
//   } else {
//     console.log("too heavy");
//   }
// }

// need this to encode whatever image is passed to it right?
async function encodeImage() {
  let filesProp = this.$refs.playerImageFileInput.files;
  let usrfile = filesProp[0];

  //async await

  //validateImage();

  if (filesProp && usrfile) {
    let theThis = this;
    webWorkerEncode.postMessage(usrfile);
    theThis.$emit("input", usrfile);

    // 'this' gets changed

    function testFunction(strng) {
      theThis.playerImageURLorDataString = strng;
    }
    webWorkerEncode.onmessage = function (event) {
      console.log("received message here");
      //this.playerImageURLorDataString = event.data;
      //
      testFunction(event.data);
    };
  }
}

function receivedWorkerMessage(event) {}
// function updateLocalStorage(fieldname, newPlayerName) {
//   localStorage[fieldname] = newPlayerName;
// }

export default {
  setup: function () {
    return {
      //endpointURL,
      //postData,
      saveHandler,
      setFromLocalStorage,
      encodeImage,
      webWorkerEncode,
      webWorkerFetch,
      //receivedWorkerMessage
      //validateImage
      //updateLocalStorage
    };
  },
  data: function () {
    return {
      // need to loop through these instead of listing them
      // DESTRUCTURE
      teamLogoAltText: defaultSettings.teamLogoAltText,
    };
  },
  methods: {
    submitHandler: async function (event) {
      console.log(this);

      // note the $
      this.webWorkerFetch.postMessage(JSON.stringify(this.$data));

      this.webWorkerFetch.onmessage = function (event) {
        console.log(
          event.data,
          "card front here thanking web worker fetch for its help"
        );
      };
      // gives proper access to THIS i believe
      // persist() {
      // 	localStorage.playerName = this.playerName;
      // 	localStorage.teamName = this.teamName;
    },
  },
  components: {
    CardFrontConfigurableV1,
  },
  computed: {
    cssProps() {
      return {
        // loop through if possible
        //donT put encoded image in here. But this could/sjhould be a property somewhere
        // "--playerimageencoded": `${this.playerImagePreview}%`
      };
    },
  },
  mounted: function () {
    //this one needs THIS
    this.setFromLocalStorage();
  },
  // watch stuff and updatefor localStorage

  watch: {
    // CURRENTLY FIRING ON EVERY KEYSTROKE
    // put this in an async function so it can save to localstorage when the call stack is for sure clear
    // or throttle/debounce
    playerName(newPlayerName) {
      localStorage.playerName = newPlayerName;
    },
    teamName(newTeamName) {
      localStorage.teamName = newTeamName;
    },
    playerPosition(newPlayerPosition) {
      localStorage.playerPosition = newPlayerPosition;
    },
    playerImageURLorDataString(newplayerImageURLorDataString) {
      localStorage.playerImageURLorDataString = newplayerImageURLorDataString;
    },
    teamLogoURL(newteamLogoURL) {
      localStorage.teamLogoURL = newteamLogoURL;
    },
  },
};
</script>


<style scoped lang="scss">
input {
  &[type="text"] {
    min-height: var(--min-touch-target-height);
  }
}

h1 {
  height: 100%;
  input[type="text"] {
    height: 100%;
  }
}
</style>