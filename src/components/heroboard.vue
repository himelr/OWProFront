<template>
<div class="heroboard">


<h2>Averages calculated from pro player data. </h2>
<div>

  
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
  name: "heroboard",
  data() {
    return {
      selected: "Eliminations per life",
      eliminations: "",
      games_won:"",
      multikill_best:"",
      time_played: "",
      weapon_accuracy:"",
      img_data:"",
      img_url:"https://d1u1mce87gyfbn.cloudfront.net/game/heroes/small/"


    };
  },
  created: function() {
    axios
      .get("/api/heroboard/get/")
      .then(response => {
        this.eliminations = response.data.eliminations_per_life
        this.games_won= response.data.games_won
        this.multikill_best = response.data.multikill_best
        this.time_played = response.data.time_played
        this.weapon_accuracy = response.data.weapon_accuracy
        this.img_data = response.data.img
      })
      .catch(function(error) {});
  },
  methods: {
    getcount:function(){
      var lul = idMaker();
      return lul.next().value;

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}
    },
    sort: function(sel) {
      if (sel == 1) {
        this.ldata.sort(function(a, b) {
          return b.scores.attack - a.scores.attack;
        });
      }
      if (sel == 2) {
        this.ldata.sort(function(a, b) {
          return b.scores.objective - a.scores.objective;
        });
      }
      if (sel == 3) {
        this.ldata.sort(function(a, b) {
          return b.scores.support - a.scores.support;
        });
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  text-align: left;
}

</style>