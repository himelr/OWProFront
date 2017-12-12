<template>
  <b-container>
     <br>
        <img class="img-responsive" src ="http://i.imgur.com/IF0dVuY.png"></img>
    <b-row>
      
      <b-col></b-col>
      <b-col cols="8">
        <div>
         
        
          <form id="searchBar" @submit.stop.prevent="artistSearch">
            <b-form-input id="inputField" type="text" placeholder="INSERT BNET-ID TO SEARCH" v-model="searchValue"></b-form-input>
            <p></p>
            <b-button type="submit" v-on:click="roam(searchValue)" class="search-but shadow">Search!</b-button>
          </form>
        </div>
       
      </b-col>
      <b-col></b-col>

    </b-row>
    <p></p>
  <b-list-group>
    <b-list-group-item active >
    Example players (click)
      </b-list-group-item>
    <b-list-group-item router-link v-bind:to="'/player/xQc-11273'">
    xqc
    <i class="fa fa-hand-spock-o" aria-hidden="true"></i>

      </b-list-group-item>
       <b-list-group-item router-link v-bind:to="'/player/Taimou-2526'">
    Taimou
    <i class="fa fa-hand-spock-o" aria-hidden="true"></i>

      </b-list-group-item>
       <b-list-group-item router-link v-bind:to="'/player/Mickie-11702'">
    Mickie    <i class="fa fa-hand-spock-o" aria-hidden="true"></i>

      </b-list-group-item>
       <b-list-group-item router-link v-bind:to="'/player/HarryHook-2309'">
    HarryHook
    <i class="fa fa-hand-spock-o" aria-hidden="true"></i>

      </b-list-group-item>
      <b-list-group-item router-link v-bind:to="'/player/ryujehong-31878'">
    Ryujehong
    <i class="fa fa-hand-spock-o" aria-hidden="true"></i>

      </b-list-group-item>
            <b-list-group-item router-link v-bind:to="'/player/Jellu-2314'">
    Jebu
    <i class="fa fa-hand-o-right" aria-hidden="true"></i>
    <i class="fa fa-car" aria-hidden="true"></i>


      </b-list-group-item>
 
</b-list-group>

  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "search",

  data: {
    searchValue: "",
    resultValue: ""
  },

  data() {
    return {
      resultValue: "",
      searchValue: "",
      seen: false
    };
  },

  methods: {
    roam:function(loc){
      this.$router.push({ name: 'player', params: { name: loc }})
    }
  }
};
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  background-color: navy;
  border-color: navy;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 2em;
  width: 30%;
}

h1 {
  color: black;
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
  text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
    0.5px 0.5px 0 #000;
  font-size: 1.3em;
}
.img-responsive{
 
     max-width:70%;

}

</style>