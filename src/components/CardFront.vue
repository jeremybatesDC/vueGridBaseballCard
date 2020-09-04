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

export default {
  data: function () {
    return {
      // need to loop through these instead of listing them
      // DESTRUCTURE
      teamLogoAltText: defaultSettings.teamLogoAltText,
    };
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