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
   <img class="prof img-responsive" v-bind:key="pdata" :src="pdata.user.img">  
   
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
  <img class="img-responsive" id = "rank" v-bind:key="pdata" :src="pdata.user.rank.img">  
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
  <div>

  <br>
 <select class="select" v-model="selected">
  <option disabled value="">Please select one</option>
  <option>Eliminations per life</option>
  <option>Games Won</option>
  <option>Multikill Best</option>
  <option>Time Played</option>
  <option>Weapon Accuracy</option>
</select>
<span>Selected: {{ selected }}</span>


</div>
  <table  v-show="selected == 'Eliminations per life'" class="table">
  <thead>
    <tr>
     <th>Portrait</th>
      <th>Hero Name</th>
      <th>Eliminations per life</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data1,index) in eliminations" :key="data1">
         <th >
          <img :src='img_url+img_data[index] + ".png"' class="img-responsive voc_list_preview_img" alt="" title="">
      </th>
   <th>{{index}}</th>
      <th>{{data1}}</th>
     
   
    </tr>
  </tbody>
</table>
 <table  v-show="selected == 'Games Won'" class="table">
  <thead>
    <tr>
      <th>Portrait</th>
      <th>Hero Name</th>
      <th>Games Won</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data2,index2) in games_won" :key="data2">
         <th >
          <img :src='img_url+img_data[index2] + ".png"' class="img-responsive voc_list_preview_img" alt="" title="">
      </th>
   <th>{{index2}}</th>
      <th>{{data2}}</th>
    </tr>
  </tbody>
</table> 
 <table  v-show="selected == 'Multikill Best'" class="table">
  <thead>
    <tr>
      <th>Portrait</th>
      <th>Hero Name</th>
      <th>Multikill Best</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data3,index3) in multikill_best" :key="data3">
         <th >
          <img :src='img_url+img_data[index3] + ".png"' class="img-responsive voc_list_preview_img" alt="" title="">
      </th>
   <th>{{index3}}</th>
      <th>{{data3}}</th>
    </tr>
  </tbody>
</table> 
 <table  v-show="selected == 'Time Played'" class="table">
  <thead>
    <tr>
      <th>Portrait</th>
      <th>Hero Name</th>
      <th>Time Played (h)</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data4,index4) in time_played" :key="data4">
         <th >
          <img :src='img_url+img_data[index4] + ".png"' class="img-responsive voc_list_preview_img" alt="" title="">
      </th>
   <th>{{index4}}</th>
      <th>{{data4}}</th>
    </tr>
  </tbody>
</table> 
 <table  v-show="selected == 'Weapon Accuracy'" class="table">
  <thead>
    <tr>
      <th>Portrait</th>
      <th>Hero Name</th>
      <th>Weapon Accuracy (%)</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data5,index5) in weapon_accuracy" :key="data5">
         <th >
          <img :src='img_url+img_data[index5] + ".png"' class="img-responsive voc_list_preview_img" alt="" title="">
      </th>
   <th>{{index5}}</th>
      <th>{{data5}}</th>
    </tr>
  </tbody>
</table> 
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
      hdata: "",
      player: this.$route.params.name,
      username: null,
      eliminations: "",
      games_won: "",
      multikill_best: "",
      time_played: "",
      weapon_accuracy: "",
      selected: "Eliminations per life",
      img_data: "",
      img_url: "https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/"
    };
  },
  created: function() {
    axios
      .get("/api/stats/get/" + this.player)
      .then(response => {
        this.pdata = response.data;
   axios
      .get("/api/hero/get/" + this.player)
      .then(response => {
        this.hdata = response.data;
        this.eliminations = response.data.eliminations_per_life;
        this.games_won = response.data.games_won;
        this.multikill_best = response.data.multikill_best;
        this.time_played = response.data.time_played;
        this.weapon_accuracy = response.data.weapon_accuracy;
        this.img_data = response.data.img;
        //alert(JSON.stringify(this.ldata))
         axios
      .get("/api/score/get/" + this.player)
      .then(response => {
        this.sdata = response.data;

        //alert(JSON.stringify(this.sdata))
      })
      .catch(function(error) {
        alert("");
      });
      })
      .catch(function(error) {
        alert("");
      });
        //alert(JSON.stringify(this.ldata))
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
  font-size: 2em;
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

#rank {
  height: 144px;
  width: 128px;
}
.container {
  max-width: 90%;
}
.select {
  text-align: center;
}
</style>