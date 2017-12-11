<template>
<div class="heroboard">

          

  </div>
</template>

<script>
import axios from 'axios';
export default {
    
  name: 'heroboard',
  data() {
    return {
     
      ldata: ""
    }
  },
  created: function() {

    axios.get("/api/heroboard/get/")
      .then((response) => {
        this.ldata = response.data;
      
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
.tree  {
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
.img-responsive{width:16%;}
</style>