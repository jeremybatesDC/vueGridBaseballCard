<template>
  <div class="wrapper">
    <article>
      <header>
        <h1 v-if="playerName">{{ playerName }}</h1>
        <h1 v-else>YOUR MOTHER</h1>
        <!-- hard to loop since distinct lists may help... Although... -->
        <ul>
          <li>{{stats.info.info_0}}</li>
          <li>{{stats.info.info_1}}</li>
        </ul>
        <ul>
          <!-- loop these-->
          <li>{{stats.info.info_2}}</li>
          <li>{{stats.info.info_3}}</li>
          <li>{{stats.info.info_4}}</li>
          <li>{{stats.info.info_5}}</li>
          <li>{{stats.info.info_6}}</li>
        </ul>
      </header>
      <section>
        <!-- columns: min 2, max 6? -->
        <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->
        <table>
          <!--<caption>Career Stats</caption>-->

          <thead>
            <tr>
              <th v-for="field in stats.fields" :key="field" scope="col">
                <span>{{field}}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="year in stats.years" :key="year">
              <!-- i really don't want to do a loop in a loop, do I? Space/time complexity wise, it's better to loop twice -->
              <td v-for="thing in year" :key="thing">{{thing}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>CAREER</td>
              <td></td>
              <td>SUM</td>
              <td>SUM</td>
              <td>AVG</td>
              <td>SUM</td>
              <td>AVG</td>
            </tr>
          </tfoot>
        </table>
        <aside>
          <blockquote>
            <h6>{{stats.info.facts[0].headline}}</h6>
            <p>{{stats.info.facts[0].text}}</p>
          </blockquote>
        </aside>
      </section>

      <footer>
        <h2>{{stats.info.facts[1].headline}}</h2>
        <fieldset>
          <textarea spellcheck="false">
              {{stats.info.facts[1].text}}
          </textarea>
          <div data-show-only-on-interaction>Text Controls</div>
        </fieldset>
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import stats from "../json/stats.json";
console.log(stats.years);
export default {
  data: function() {
    return {
      stats
    };
  }
};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

// color contast functions: https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/

.wrapper {
  display: flex;
  //flex-direction: column;

  background-color: #9a8b7c;
  max-width: 50.4rem;
  height: 36rem;
  margin-bottom: 2.4rem;
  padding: 1.6rem;
  overflow: hidden;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(#9c2c1a, 0.25);
}

header {
  display: flex;
  flex-direction: column;

  padding: 1rem 1.6rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0 0 1rem 0;
    justify-content: space-between;

    &:first-of-type {
      padding: 0.5rem 0;

      // TEMPORARY FAUX-BOLD
      font-weight: bold;

      background: #000;
      color: #9a8b7c;
      box-shadow: 1.6rem 0 #000, -1.6rem 0 #000;
    }
    &:nth-of-type(2) {
      li {
        &:first-of-type {
          width: 100%;
          padding: 0.6rem 0;
        }
      }
    }

    &:last-of-type {
      padding-bottom: 0;
    }
    li {
      display: inline-flex;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
}

h1 {
  font-size: 2.4rem;
  line-height: 1;
  //box-shadow: inset 0 -1px rgba(0, 0, 0, 0.5);
  padding-bottom: 0.4rem;
  //margin-bottom: 1rem;
}

h2 {
  font-size: 1.4rem;
  line-height: 1;
  padding-bottom: 0.5rem;
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
  padding: 0 1.6rem 1.6rem 1.6rem;
  //background: rgba(#9c2c1a, 0.1);
}
table {
  width: 32rem;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;
  // border: 1px solid #000;
  // border-radius: 1rem;
}
caption {
  //background: rgba(#9c2c1a, 0.25);
  text-align: left;
  padding: 0.5rem;
  // learned something new
  //caption-side: bottom;
}

thead {
  font-variation-settings: "wght" 150, "wdth" 35, "opsz" 0, "GRAD" 48, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px #000;
  //text-align: inherit;
}
th {
  //vertical-align: top;
  //padding-left: 1rem;
  text-align: center;
  transform: rotate(-45deg);
  //transform-origin: 50% 50%;
  // &:first-of-type,
  // &:nth-of-type(2) {
  //   text-align: left;
  // }
  &::first-line {
    text-align: left;
    padding-left: 0;
    margin-left: -1rem;
  }
  // // transform doesnT seem to want to apply to the nested span
  span {
    //padding-left: 1rem;
    margin-right: -1rem;
  }
}

tbody {
  box-shadow: 0 1px #000;
  font-variation-settings: "wght" 100, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(255, 255, 255, 0.1);
  td {
    padding: 0.2rem 0.4rem;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
    //text-align: left;
    &:first-child,
    &:nth-child(2) {
      text-align: left;
    }
  }
}

tfoot {
  font-variation-settings: "wght" 400, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  td {
    padding: 0.4rem;
  }
  //box-shadow: 0 1px #000;
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh
aside {
  display: flex;
  max-width: calc(100% - 32rem);
}

blockquote {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);
  align-items: center;
  p {
    padding: 1rem 1.6rem;
  }
}

footer {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1.2rem;
  line-height: 1;
  padding: 0 1.6rem 1rem 1.6rem;
}

p {
  font-size: 1.2rem;
  line-height: 1;
}

[data-show-only-on-interaction] {
  position: absolute;
  opacity: 0;
  overflow: visible;
  fieldset:focus-within & {
    height: auto;
    opacity: 1;
  }
}

fieldset {
  position: relative;
  border: none;
  box-shadow: none;
}
</style>
