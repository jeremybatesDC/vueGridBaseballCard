<template>
  <main id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">
    <!-- would like to use async and suspense if beneficial -->
    <div class="baseballCard__wrapper--inner">
      <article class="gridParent">
        <aside class="corner--top--left"></aside>
        <header class="masthead--center">
          <h2>
            <input v-model="teamName" type="text" placeholder maxlength="42" />
            <!-- {{ teamName }} -->
          </h2>
        </header>
        <aside class="corner--top--right"></aside>

        <aside class="sidebar--left"></aside>
        <section class="image__container">
          <!-- Edit this and the preview will update automatically. -->

          <img
            width="312"
            height="384"
            loading="lazy"
            class="image--player"
            :src="playerImageURLorDataString"
            :alt="playerName + ' being awesome'"
          />
        </section>
        <aside class="sidebar--right"></aside>

        <aside class="corner--bottom--left"></aside>
        <section class="footer--playerName">
          <h1>
            <input
              v-model="playerName"
              type="text"
              placeholder
              maxlength="48"
            />
          </h1>
        </section>
        <section class="footer--playerPosition">
          <h3>
            <input
              v-model="playerPosition"
              type="text"
              placeholder
              maxlength="48"
            />
          </h3>
        </section>
        <section class="footer--teamLogo">
          <img
            width="72"
            height="72"
            loading="lazy"
            class="image--teamLogo {{logoPosition}}"
            :src="teamLogoURL"
            :alt="teamLogoAltText"
          />

          <!-- <input
            class="fileInput--fullContainerSize"
            type="file"
            id="logoFileInput"
            name="logoFileInput"
            accept="image/*"
          />-->
        </section>
        <aside class="corner--bottom--right"></aside>

        <svg class="svg--textureOverlay" width="320" height="448">
          <g>
            <rect
              width="320"
              height="448"
              :filter="`url(#${cardBackgroundTexture})`"
              :fill="`url(#${cardBackgroundTexture})`"
              opacity="1"
            />
          </g>
        </svg>
      </article>
    </div>
    <form class="form--cardDesign">
      <fieldset>
        <legend>Card Images</legend>
        <label>
          Player Image (URL or upload):
          <input v-model="playerImageURLorDataString" type="text" placeholder />
          <br />
          <input
            class
            type="file"
            id="playerImageFileInput"
            ref="playerImageFileInput"
            name="playerImageFileInput"
            accept="image/*"
            @input="encodeImage"
          />
        </label>

        <div class="row">
          <label>
            Brightness
            <input
              v-model="cardBrightness"
              type="range"
              min="1"
              max="1.3"
              step="0.01"
            />
          </label>
          <label>
            Sepia
            <input v-model="cardSepia" type="range" min="0" max="50" />
          </label>
          <label>
            Greyscale
            <input v-model="cardGrayScale" type="range" min="0" max="100" />
          </label>
        </div>
        <label>
          Team Logo Image (URL):
          <input v-model="teamLogoURL" type="url " placeholder />
          <!-- <input type="file" id="logoFileInput" name="logoFileInput" accept="image/*" /> -->
        </label>
        <label>
          Logo Position
          <select v-model="logoPosition">
            <option value="flex-end">Bottom Right</option>
            <option value="flex-start">Top Right</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Card Typography</legend>
        <div class="row">
          <label>
            Font Weight
            <input
              v-model="cardTextFontWeight"
              type="range"
              min="100"
              max="900"
            />
          </label>
          <label>
            Font Width
            <input
              v-model="cardTextFontWidth"
              type="range"
              min="35"
              max="100"
            />
          </label>
          <label>
            Font Optical Size (inverse)
            <input
              v-model="cardTextFontOptSize"
              type="range"
              min="10"
              max="72"
            />
          </label>
          <label>
            Font Grade
            <input v-model="cardTextFontGrade" type="range" min="0" max="48" />
          </label>
          <label>
            Font Slant
            <input v-model="cardTextFontSlant" type="range" min="-10" max="0" />
          </label>
          <label>
            Text Color
            <input v-model="cardTextColor" type="color" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Design</legend>
        <div class="row">
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
          <label>
            Border
            <input v-model="cardBorderColor" type="color" />
          </label>
          <label>
            Corner Curve
            <input v-model="cardBorderCurve" type="range" min="0" max="24" />
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Imperfections</legend>
      </fieldset>
      <!-- mmust be type button so it doesn't fight with submit-->
      <button type="button" @click="saveHandler">Save</button>
      <button type="button" @click="submitHandler">Submit</button>
    </form>
  </main>
</template>

<script lang="ts">
// typescript working out of box in vite

// can we make this import ASYNC?
//import placeholderEncodedImage from "../json/placeholder-image.json";
import defaultSettings from "../json/default-settings.json";

export default {
  setup: () => {
    // any reason not to fire up web worker at the beginning?
    var webWorker = new Worker("./web-worker.js");

    const endpointURL = "https://reqres.in/api/users";
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
    async function submitHandler() {
      // using THIS sends whole data object (saves a bunch of imperative code)
      postData(endpointURL, this)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("DOH! ", error);
        });
    }
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

    async function encodeImage() {
      let filesProp = this.$refs.playerImageFileInput.files;
      let usrfile = filesProp[0];

      //async await

      //validateImage();

      if (filesProp && usrfile) {
        let theThis = this;
        webWorker.postMessage(usrfile);
        theThis.$emit("input", usrfile);

        // 'this' gets changed

        function testFunction(strng) {
          theThis.playerImageURLorDataString = strng;
        }
        webWorker.onmessage = function (event) {
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

    return {
      endpointURL,
      postData,
      submitHandler,
      saveHandler,
      setFromLocalStorage,
      encodeImage,
      //receivedWorkerMessage
      //validateImage
      //updateLocalStorage
    };
  },
  data: function () {
    return {
      // playerImageURLorDataString:
      //   placeholderEncodedImage.endcodedimagedatastring,
      playerImageURLorDataString: defaultSettings.playerImageURLorDataString,
      playerName: defaultSettings.playerName,
      playerPosition: defaultSettings.playerPosition,
      teamLogoAltText: defaultSettings.teamLogoAltText,
      teamLogoURL: defaultSettings.teamLogoURL,
      teamName: defaultSettings.teamName,
      cardBackgroundColor: defaultSettings.cardBackgroundColor,
      cardBackgroundTexture: defaultSettings.cardBackgroundTexture,
      cardBorderColor: defaultSettings.cardBorderColor,
      cardBorderCurve: defaultSettings.cardBorderCurve,
      cardBrightness: defaultSettings.cardBrightness,
      cardTextColor: defaultSettings.cardTextColor,
      cardTextFontWeight: defaultSettings.cardTextFontWeight,
      cardTextFontWidth: defaultSettings.cardTextFontWidth,
      cardTextFontOptSize: defaultSettings.cardTextFontOptSize,
      cardTextFontGrade: defaultSettings.cardTextFontGrade,
      cardTextFontSlant: defaultSettings.cardTextFontSlant,
      cardSepia: defaultSettings.cardSepia,
      cardGrayScale: defaultSettings.cardGrayScale,
      logoPosition: defaultSettings.logoPosition,
    };
  },
  /*methods: {
    // i am starting to see why folks like jake archibald have wrapped this
    // persist() {
    // 	localStorage.playerName = this.playerName;
    // 	localStorage.teamName = this.teamName;
    // }
  },*/
  computed: {
    cssProps() {
      return {
        "--cardbackgroundcolor": this.cardBackgroundColor,
        "--cardtextcolor": this.cardTextColor,
        "--cardbordercolor": this.cardBorderColor,
        "--cardbordercurve": `${this.cardBorderCurve}px`,
        "--cardtextfontweight": this.cardTextFontWeight,
        "--cardtextfontwidth": this.cardTextFontWidth,
        "--cardtextfontoptsize": this.cardTextFontOptSize,
        "--cardtextfontgrade": this.cardTextFontGrade,
        "--cardtextfontslant": this.cardTextFontSlant,
        "--cardsepia": `${this.cardSepia}%`,
        "--cardbrightness": this.cardBrightness,
        "--cardgrayscale": `${this.cardGrayScale}%`,
        "--logoPosition": this.logoPosition,
        //donT put encoded image in here. But this could/sjhould be a property somewhere
        // "--playerimageencoded": `${this.playerImagePreview}%`
      };
    },
  },
  mounted: function () {
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
