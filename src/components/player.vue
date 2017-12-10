<template>
<div class="player">
  <div class="container">
<div><h4> Battle.net ID {{$route.params.name}} </h4></div>
 <!--  <div v-for="data in ldata" :key="data">
      <p> {{data.user.username}} </p>
          </div> -->

  <div class="row">
<div class = "tree col">
  
  <tree-view :data="pdata" :options="{maxDepth: 2}"></tree-view>
   <b-button  v-if="this.username != null" v-on:click="add()" class ="lul" size="lg" variant="success">
                Save profile
            </b-button>
  </div>
 <div class="col">
   <img class="prof img-responsive" v-bind:key="pdata" :src="pdata.user.img">  </img>
   
       <ul class="list-group" v-bind:key="sdata">
  <li class="list-group-item active">Calculated Score Rating</li>
  <li class="list-group-item">ATTACK: {{sdata.scores.attack}}</li>
  <li class="list-group-item">OBJECTIVE: {{sdata.scores.objective}}</li>
  <li class="list-group-item">SUPPORT: {{sdata.scores.support}}</li>

      </ul>
          <ul class="list-group" v-bind:key="pdata">
  <li class="list-group-item active">Game Data</li>
  <li class="list-group-item">RANK: {{pdata.user.rank.ranking}}</li>
  <li class="list-group-item">WINS: {{pdata.competitive.Game["Games Won"]}}</li>
   <li class="list-group-item">TIES: {{pdata.competitive.Game["Games Tied"]}}</li>
  <li class="list-group-item">LOSSES: {{pdata.competitive.Game["Games Lost"]}} </li>
  <li class="list-group-item">WINRATE: {{Math.round(pdata.competitive.Game["Games Won"] / pdata.competitive.Game["Games Lost"] * 100) / 100 }} </li>
    <li class="list-group-item">GAMES PLAYED: {{pdata.competitive.Game["Games Played"]}}</li>
  <li class="list-group-item">TIME PLAYED: {{pdata.competitive.Game["Time Played"]}} </li>

</ul>

  </div>
   <div class="col">  
  <img class="img-responsive" id = "rank" v-bind:key="pdata" :src="pdata.user.rank.img">  </img>
          <ul class="list-group" v-bind:key="pdata">
  <li class="list-group-item active">Stats</li>
 
  <li class="list-group-item">ALL DAMAGE DONE: {{pdata.competitive.Combat["All Damage Done"]}}</li>
   <li class="list-group-item">ELIMINATIONS: {{pdata.competitive.Combat["Eliminations"]}}</li>
  <li class="list-group-item">HERO DAMAGE DONE: {{pdata.competitive.Combat["Hero Damage Done"]}} </li>
  <li class="list-group-item">MULTIKILLS: {{pdata.competitive.Combat["Multikills"]}} </li>
    <li class="list-group-item">OBJECTIVE KILLS: {{pdata.competitive.Combat["Objective Kills"]}}</li>
  <li class="list-group-item">OBJECTIVE TIME: {{pdata.competitive.Combat["Objective Time"]}} </li>
  <li class="list-group-item">SOLO KILLS: {{pdata.competitive.Combat["Solo Kills"]}} </li>
 <li class="list-group-item">ENVIROMENTAL KILLS {{pdata.competitive.Combat["Environmental Kills"]}} </li>
  <li class="list-group-item">BARRIER DAMAGE DONE {{pdata.competitive.Combat["Barrier Damage Done"]}} </li>
   <li class="list-group-item">FINAL BLOWS: {{pdata.competitive.Combat["Final Blows"]}} </li>
<li class="list-group-item">TIME SPENT ON FIRE: {{pdata.competitive.Combat["Time Spent on Fire"]}} </li>
</ul>
   </div>
       </div>
       
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "player",
  data() {
    return {
      pdata: "",
      sdata: "",
      player: this.$route.params.name,
      username: null
    };
  },
  created: function() {
    axios
      .get("/api/stats/get/" + this.player)
      .then(response => {
        this.pdata = response.data;

        //alert(JSON.stringify(this.ldata))
      })
      .catch(function(error) {
        alert("");
      });
    axios
      .get("/api/score/get/" + this.player)
      .then(response => {
        this.sdata = response.data;

        //alert(JSON.stringify(this.sdata))
      })
      .catch(function(error) {
        alert("");
      });
    axios
      .get("/api/user/get/")
      .then(response => {
        this.username = response.data;
      })
      .catch(function(error) {});
  },
  methods: {
    add: function() {
      axios
        .get("/api/add/player/" + this.player)
        .then(response => {
          this.sdata = response.data;
          alert("Player saved");

          //alert(JSON.stringify(this.sdata))
        })
        .catch(function(error) {
          alert("");
        });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
h4 {
  padding-top: 1em;
}
.tree {
  text-align: left;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.table td {
  text-align: center;
}
.prof {
  padding-bottom: 1em;
}
/* .rank {
   height: 12em;
    width: 12em;
  padding-bottom: 1em;
}
 */

#rank{
  height: 144px;
  width: 128px;
}
.container{
max-width: 90%;

}
</style>