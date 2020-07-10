<template>
  <article>
    <header>
      <h1 v-if="playerName">{{ playerName }}</h1>
      <h1 v-else>YOUR MOTHER</h1>
      <ul>
        <li>jeremy.bates@gmail.com</li>
        <li>(301) 678-3467</li>
      </ul>
      <ul>
        <li>University of Maryland, College Park, 2002</li>
      </ul>
      <ul>
        <li>First Base</li>
        <li>Born 1/2/33</li>
        <li>Bats Left</li>
        <li>Throws Right</li>
      </ul>
    </header>
    <section>
      <!-- columns: min 2, max 6? -->
      <!-- tbody rows: min 0 (leaving only tfoot totals), max 10? -->
      <table>
        <caption>Career Stats</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Home City</th>
            <th scope="col">Races Cycled</th>
            <th scope="col">Miles Cycled</th>
            <th scope="col">Avg Speed</th>
            <th scope="col">Falls</th>
            <th scope="col">Beers Tasted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="year in stats.years" :key="year">
            <td>{{year.year}}</td>
            <td>{{year.homeCity}}</td>
            <td>{{year.racesCycled}}</td>
            <td>{{year.milesCycled}}</td>
            <td>{{year.avgSpeed}}</td>
            <td>{{year.falls}}</td>
            <td>{{year.beersTasted}}</td>
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
          <p>This div can be aside table in horz and above/below in vert</p>
        </blockquote>
      </aside>
    </section>

    <footer>
      <h2>Did you know?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>
    </footer>
  </article>
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

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #9a8b7c;
  max-width: 50.4rem;
  height: 36rem;
  margin-bottom: 2.4rem;
  padding: 2.4rem;
}

header {
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0 0 0.5em 0;
    justify-content: space-between;
    li {
      display: inline-flex;
      font-size: 1.2rem;
      line-height: 1;
    }
  }
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
}
table {
  width: 32rem;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1;
  font-variant-numeric: lining-nums tabular-nums;
  text-align: right;
  border: 1px solid #000000;
  border-radius: 1rem;
}
caption {
  background: rgba(#3c5c9f, 0.25);
  text-align: left;
  // learned something new
  //caption-side: bottom;
}

thead {
  box-shadow: 0 1px #000000;
  font-variation-settings: "wght" 150, "wdth" 35, "opsz" 0, "GRAD" 48, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  //text-align: inherit;
}
th {
  //text-align: left;
  vertical-align: bottom;
  padding: 0.2rem 0.4rem;
}

tbody {
  box-shadow: 0 1px #000000;
  font-variation-settings: "wght" 100, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(255, 255, 255, 0.1);
  td {
    padding: 0.2rem 0.4rem;
    box-shadow: 0 1px rgba(0, 0, 0, 0.25);
  }
}

tfoot {
  font-variation-settings: "wght" 400, "wdth" 0, "opsz" 20, "GRAD" 48, "slnt" 0;
  background: rgba(0, 0, 0, 0.05);
  //box-shadow: 0 1px #000000;
}

// rather imperative here, but having table as child of flex element was kinda odd... ooooh
aside {
  padding-left: 1.6rem;
  display: flex;
  max-width: calc(100% - 32rem);
  p {
    font-size: 1.2rem;
  }
}

blockquote {
  display: flex;
  padding: 0;
  margin: 0;
  background: rgba(#9c2c1a, 0.25);
  align-items: center;
  p {
    padding: 1rem;
  }
}

footer {
  background: rgba(#7a8b5a, 0.5);
  padding: 1.6rem;
}

h1 {
  font-size: 2.4rem;
  box-shadow: inset 0 -1px rgba(0, 0, 0, 0.5);
  padding-bottom: 0;
  margin-bottom: 1rem;
}
p {
  font-size: 1.4rem;
}
</style>
