<template>
  <div id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">
    <CardFrontConfigurable />

    <div class="baseballCard__wrapper--mid">
      <form class="form--cardDesign">
        <fieldset>
          <details>
            <summary>
              <legend>Card Images</legend>
            </summary>
            <label>
              Player Image (URL or upload):
              <input
                v-model="playerImageURLorDataString"
                type="text"
                placeholder
              />
              <br />
            </label>

            <label>
              Team Logo Image (URL):
              <input v-model="teamLogoURL" type="url " placeholder />
              <!-- <input type="file" id="logoFileInput" name="logoFileInput" accept="image/*" /> -->
            </label>
          </details>
        </fieldset>
        <fieldset>
          <details>
            <summary>
              <legend>Typography</legend>
            </summary>
            <label>
              Text Color
              <input v-model="cardTextColor" type="color" />
            </label>
            <label>
              Font Weight
              <input v-model="cardTextFontWeight" type="range" min="100" max="900" />
            </label>
            <label>
              Font Width
              <input v-model="cardTextFontWidth" type="range" min="35" max="100" />
            </label>

            <label>
              Font Slant
              <input v-model="cardTextFontSlant" type="range" min="-10" max="0" />
            </label>
            <label>
              Font Grade
              <input v-model="cardTextFontGrade" type="range" min="0" max="48" />
            </label>
          </details>
        </fieldset>
        <fieldset>
          <details>
            <summary>
              <legend>Design</legend>
            </summary>
            <label>
              Background
              <input v-model="cardBackgroundColor" type="color" />
            </label>
            <label>
              Texture
              <select v-model="cardBackgroundTexture">
                <option>no texture</option>
                <option value="filterfabric">Fabric</option>
                <option value="filterpaper">Paper</option>
                <option value="filternoise">Noise</option>
              </select>
            </label>
          </details>
        </fieldset>

        <fieldset>
          <details>
            <summary>
              <legend>Imperfections</legend>
            </summary>

            <!-- nested accordion here -->
            <!-- gum -->
            <details>
              <summary>Gum</summary>
              <label>
                <input type="radio" name="gumradio" value="nogum" />
                No gum
              </label>
              <label>
                <input type="radio" name="gumradio" value="gum front" />
                Gum front
              </label>
              <label>
                <input type="radio" name="gumradio" value="gum back" />
                Gum back
              </label>

              <label>
                Gum angle
                <input type="range" value />
              </label>
              <label>
                Gum placement horz
                <select>
                  <option>left</option>
                  <option>center</option>
                  <option>right</option>
                </select>
              </label>

              <label>
                Gum placement vert
                <select>
                  <option>top</option>
                  <option>middle</option>
                  <option>bottom</option>
                </select>
              </label>
            </details>

            <!-- cmyk -->
            <!-- <details>
            <summary>Print Defects</summary>
            <label>
              <input type="checkbox" />
              CMYK print misalignment
            </label>
            <label>
              Misalignment Degree
              <input type="range" />
            </label>
            </details>-->

            <!-- corners -->
            <details>
              <summary>Corner Fuziness/Dogears</summary>
              <label>
                Dog-Eared Corner
                <select>
                  <option>none</option>
                  <option>top left</option>
                  <option>top right</option>
                  <option>bottom left</option>
                  <option>bottom right</option>
                </select>
              </label>

              <label>
                Fuzzy Corner
                <select>
                  <option>none</option>
                  <option>top left</option>
                  <option>top right</option>
                  <option>bottom left</option>
                  <option>bottom right</option>
                </select>
              </label>
              <label>
                Fuzziness Degree
                <input type="range" />
              </label>
            </details>

            <!-- <details>
            <summary>Other Creases</summary>
            <label>
              Crease Location
              <select>
                <option>none</option>
                <option>top left</option>
                <option>top right</option>
                <option>bottom left</option>
                <option>bottom right</option>
              </select>
            </label>
            <label>
              Crease/Fuzziness Severity (if selected)
              <input type="range" />
            </label>
            </details>-->
          </details>
        </fieldset>

        <!-- mmust be type button so it doesn't fight with submit-->
        <button type="button" @click="saveHandler">Save</button>
        <button type="button" @click="submitHandler">Submit</button>
      </form>
    </div>

    <!-- would like to use async and suspense if beneficial -->
    <!-- <svg class="svg--textureOverlay" width="320" height="448">
            <g>
              <rect
                width="320"
                height="448"
                :filter="`url(#${cardBackgroundTexture})`"
                :fill="`url(#${cardBackgroundTexture})`"
                opacity="1"
              />
            </g>
    </svg>-->
  </div>
</template>

<script lang="ts">
// typescript working out of box in vite

// can we make this import ASYNC?
//import placeholderEncodedImage from "/json/placeholder-image.json";
import defaultSettings from "/json/default-settings.json";
import CardFrontConfigurable from "./InputChildComponents/CardFrontConfigurable.vue";

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
    CardFrontConfigurable,
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