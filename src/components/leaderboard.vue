<template>
<div class="leaderboard">
 <!--  <div v-for="data in ldata" :key="data">
      <p> {{data.user.username}} </p>
          </div> -->
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Avatar</th>
      <th>Player Name</th>
      <th v-on:click="sort(1)">Attack Score
        <i class="fa fa-sort" aria-hidden="true"></i>
  
      </th>
      <th v-on:click="sort(2)">Objective Score
          <i class="fa fa-sort" aria-hidden="true"></i>

      </th>
      
      <th v-on:click="sort(3)">Support Score
          <i class="fa fa-sort" aria-hidden="true"></i>

      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,index) in ldata" :key="data">
      <th scope="row">{{index + 1}}</th>
      <th >
          <img :src='data.user.img' class="img-responsive voc_list_preview_img" alt="" title=""></a>
      </th>
      <th>{{data.user.username}}</th>
      <th>{{data.scores.attack}}</th>
      <th>{{data.scores.objective}}</th>
      <th>{{data.scores.support}}</th>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    
  name: 'leaderboard',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      ldata: ""
    }
  },
  created: function() {

    axios.get("/api/leaderboard/get/")
      .then((response) => {
        this.ldata = response.data;
        //alert(JSON.stringify(this.ldata))
      })
      .catch(function(error) {

      });
  },
  methods:{
      sort:function(sel){

          if(sel == 1){

                 this.ldata.sort(function (a, b) {
                    return b.scores.attack - a.scores.attack;
             });
          }
             if(sel == 2){

                 this.ldata.sort(function (a, b) {
                   
                    return b.scores.objective - a.scores.objective;
             });
             }
             if(sel == 3){

                 this.ldata.sort(function (a, b) {
                    return b.scores.support - a.scores.support;
             });

          }

      }
  }

}


</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.img-responsive{width:16%;}
</style>