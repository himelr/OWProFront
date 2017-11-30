<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <div>
          <br>
          <H1>Players</H1>
          <form id="searchBar" @submit.stop.prevent="artistSearch">
            <b-form-input id="inputField" type="text" placeholder="Hallo" v-model="searchValue"></b-form-input>
            <p></p>
            <b-button type="submit" class="search-but shadow">Search</b-button>
          </form>
        </div>
      </b-col>
      <b-col></b-col>

    </b-row>
    <p></p>


  </b-container>
</template>

<script>
import axios from 'axios';
export default {

  name: 'search',

  data: {
    searchValue: '',
    resultValue: "",
  },




  data() {
    return {
      resultValue: "",
      searchValue: "",
      seen: false
    }
  },

  methods: {


  }
}

</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#searchResults {
  font-size: 1.5em;
}

.search-but {
  color: #fff;
  background-color: #9C27B0;
  border-color: #9C27B0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 2em;
  width: 30%;
}

h1 {
  color: white;
}

#searchBar {
  margin-top: 2em;
}

#inputField {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 3em;
  font-size: 1.4em;
  font-weight: bold;
 
}

#searchBg {
  background: whitesmoke;
  border-radius: 0.5em;
  width: 100%;
  margin-top: 2em;
  padding: 1em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#resultPrint {
  color: #871ca5;
  text-shadow:
		-0.5px -0.5px 0 #000,
		0.5px -0.5px 0 #000,
		-0.5px 0.5px 0 #000,
		0.5px 0.5px 0 #000;
    font-size: 1.3em;
}

</style>