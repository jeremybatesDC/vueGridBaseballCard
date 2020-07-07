<template>
  <article>
    <table>
      <caption>
        <h1 v-if="playerName">{{ playerName }}'s Career Stats</h1>
        <h1 v-else>Your mom's career stats</h1>
      </caption>
      <thead>
        <tr>
          <th scope="col">Year</th>
          <th scope="col">City</th>
          <th scope="col">Races</th>
          <th scope="col">Miles</th>
          <th scope="col">Speed</th>
          <th scope="col">Falls</th>
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
        </tr>
        <tr>
          <td>2019</td>
          <td>NYC</td>
          <td>22</td>
          <td>330</td>
          <td>39</td>
          <td>2</td>
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
        </tr>
      </tfoot>
    </table>
  </article>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
// if can keep square stats table, will allow switch between vert and horz

article {
  max-width: 36rem;
}
table {
  width: 100%;
  max-width: 32rem;
  margin: 0 auto;
}
tbody {
  height: 32rem;
}

th {
  text-align: left;
}
</style>
