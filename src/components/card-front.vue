<template>
  <main id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">
    <!-- this instant prototype feature of vue cli is meant to require no cofig -->
    <!-- odd then that viewport isn't in default -- putting it here -->
    <svg class="hidden">
      <defs>
        <filter id="filterpaper" opacity=".5">
          <feTurbulence type="fractalNoise" baseFrequency=".5" numOctaves="1" result="noise" />
          <feDiffuseLighting
            lighting-color="white"
            diffuseConstant="1"
            surfaceScale="0.5"
            result="diffLight"
          >
            <feDistantLight azimuth="100" elevation="55" />
          </feDiffuseLighting>
        </filter>
        <filter id="filternoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".3333"
            numOctaves="1"
            stitchTiles="stitch"
          />
        </filter>
        <filter id="filterfabric">
          <feTurbulence type="turbulence" baseFrequency="999" numOctaves="10" result="turbulence" />
        </filter>
      </defs>
    </svg>
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
            loading="lazy"
            class="image--player"
            :src="playerImageURL"
            :alt="playerName + ' being awesome'"
          />
          <input
            class="fileInput--fullContainerSize"
            type="file"
            id="playerImageFileInput"
            name="playerImageFileInput"
            accept="image/png, image/jpeg"
          />
        </section>
        <aside class="sidebar--right"></aside>

        <aside class="corner--bottom--left"></aside>
        <section class="footer--playerName">
          <h1>
            <input v-model="playerName" type="text" placeholder maxlength="48" />
          </h1>
        </section>
        <section class="footer--playerPosition">
          <h3>
            <input v-model="playerPosition" type="text" placeholder maxlength="48" />
          </h3>
        </section>
        <section class="footer--teamLogo">
          <img loading="lazy" class="image--teamLogo" :src="teamLogoURL" :alt="teamLogoAltText" />

          <input
            class="fileInput--fullContainerSize"
            type="file"
            id="logoFileInput"
            name="logoFileInput"
            accept="image/png, image/jpeg"
          />
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
        <label>
          Player Image (URL):
          <input v-model="playerImageURL" type="text" placeholder />
          <input
            type="file"
            id="playerImageFileInput"
            name="playerImageFileInput"
            accept="image/png, image/jpeg"
          />
        </label>
        <label>
          Team Logo Image (URL):
          <input v-model="teamLogoURL" type="url " placeholder />
          <input type="file" id="logoFileInput" name="logoFileInput" accept="image/png, image/jpeg" />
        </label>
      </fieldset>
      <fieldset>
        <legend>Card Design</legend>
        <div class="row">
          <label>
            Font Weight
            <input v-model="cardTextFontWeight" type="range" min="100" max="900" />
          </label>
          <!-- <label>
            Font Width
            <input v-model="cardTextFontWidth" type="range" min="75" max="100" />
          </label>-->
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
            Card Texture
            <select v-model="cardBackgroundTexture">
              <option>no texture</option>
              <option value="filterfabric">Fabric</option>
              <option value="filterpaper">Paper</option>
              <option value="filternoise">Noise</option>
            </select>
          </label>
        </div>
        <div class="row">
          <label>
            Background
            <input v-model="cardBackgroundColor" type="color" />
          </label>
          <label>
            Text
            <input v-model="cardTextColor" type="color" />
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

        <div class="row">
          <label>
            Brightness
            <input v-model="cardBrightness" type="range" min="1" max="1.3" step="0.01" />
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
      </fieldset>
      <!-- mmust be type button so it doesn't fight with submit-->
      <button type="button" @click="clickHandler">Submit Design</button>
    </form>
  </main>
</template>

<!-- setting lang here to ts doesnT really seem to work. Yes, I can bring in TS from other sources -->
<script>
export default {
  setup: function() {
    const endpointURL = "https://reqres.in/api/users";
    async function postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
        // learn these other options
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", (see more)
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    function clickHandler() {
      // using THIS sends whole data object (saves a bunch of imperative code)
      postData(endpointURL, this)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error("DOH! ", error);
        });
    }
    function setFromLocalStorage() {
      for (let key in localStorage) {
        if (localStorage[key]) {
          this[key] = localStorage[key];
        }
      }
    }
    // function updateLocalStorage(fieldname, newPlayerName) {
    //   localStorage[fieldname] = newPlayerName;
    // }

    return {
      endpointURL,
      postData,
      clickHandler,
      setFromLocalStorage
      //updateLocalStorage
    };
  },
  data: function() {
    return {
      playerImageURL:
        "https://securea.mlb.com/mlb/images/players/head_shot/543685.jpg",
      playerName: "Anthony Rendon",
      playerPosition: "Third Base",
      teamLogoAltText: "Nats Curley W Logo",
      teamLogoURL:
        "http://content.sportslogos.net/logos/54/578/full/rcehah9k0kekjkgzm077fflws.png",
      teamName: "Washington Nationals",
      cardBackgroundColor: "#eee",
      cardBackgroundTexture: "filterfabric",
      cardBorderColor: "#000",
      cardBorderCurve: "0",
      cardBrightness: "1",
      cardTextColor: "#000",
      cardTextFontWeight: "400",
      cardTextFontWidth: "90",
      cardTextFontOptSize: "25",
      cardSepia: "0",
      cardGrayScale: "0"
    };
  },
  methods: {
    // i am starting to see why folks like jake archibald have wrapped this
    // persist() {
    // 	localStorage.playerName = this.playerName;
    // 	localStorage.teamName = this.teamName;
    // }
  },
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
        "--cardsepia": `${this.cardSepia}%`,
        "--cardbrightness": this.cardBrightness,
        "--cardgrayscale": `${this.cardGrayScale}%`
      };
    }
  },
  mounted: function() {
    this.setFromLocalStorage();
  },
  // watch stuff and updatefor localStorage
  watch: {
    // CURRENTLY FIRING ON EVERY KEYSTROKE :/
    playerName(newPlayerName) {
      localStorage.playerName = newPlayerName;
    },
    teamName(newTeamName) {
      localStorage.teamName = newTeamName;
    },
    playerPosition(newPlayerPosition) {
      localStorage.playerPosition = newPlayerPosition;
    },
    playerImageURL(newPlayerImageURL) {
      localStorage.playerImageURL = newPlayerImageURL;
    },
    teamLogoURL(newteamLogoURL) {
      localStorage.teamLogoURL = newteamLogoURL;
    }
  }
};
</script>
