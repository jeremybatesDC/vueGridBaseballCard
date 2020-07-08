<template>
  <article>
    <header>
      <h1 v-if="playerName">{{ playerName }}</h1>
      <h1 v-else>Your mom</h1>
      <ul>
        <li>First Base</li>
        <li>Born 1/2/33</li>
        <li>Other fields from front like teamname</li>
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
          <tr>
            <td>1999</td>
            <td>Toledo</td>
            <td>10</td>
            <td>100</td>
            <td>33</td>
            <td>0</td>
            <td>99</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>NYC</td>
            <td>22</td>
            <td>330</td>
            <td>39</td>
            <td>2</td>
            <td>98</td>
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
      <aside>This div can be aside table in horz and below in vert</aside>
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
export default {};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

article {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #9a8b7c;
  max-width: 50.4rem;
  height: 36rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
}

header {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: inline;
    }
  }
}

// set EXPLICIT font variation settings for the table
section {
  // if this part is restricted to vert width, then it'll definitely fit on horz
  display: flex;
}
table {
  width: 100%;
  //max-width: 32rem;
  margin: 0 auto;
  font-size: 1.2rem;
  font-variant-numeric: lining-nums tabular-nums;
  border: 1px solid #000000;
}

thead {
  box-shadow: 0 1px #000000;
  font-variation-settings: "wght" 150, "wdth" 35, "opsz" 10, "GRAD" 48, "slnt" 0;
}
th {
  text-align: left;
}

tbody {
  box-shadow: 0 1px #000000;
  font-variation-settings: "wght" 100, "wdth" 0, "opsz" 0, "GRAD" 48, "slnt" 0;
}
tfoot {
  font-variation-settings: "wght" 150, "wdth" 0, "opsz" 0, "GRAD" 48, "slnt" 0;
  //box-shadow: 0 1px #000000;
}

aside {
  background: #1a5c9f;
  padding: 1.6rem;
}

footer {
  background: #7a8b5a;
  padding: 1.6rem;
}
</style>
