<template>
  <div class="profile">
    <div class="container">
  <h2>List Of Players Saved</h2>
  <div class="list-group" >
    <a  href="#" class="list-group-item active">Press To View</a>
    <!-- :href="'/player/'+ data" -->

    <div v-for="data in players" :key="data" ><router-link v-bind:to="'/player/' + data" class="list-group-item">{{data}}</router-link></div>
    
  </div>
</div>

   
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'profile',
  data() {
    return {
      players:""
     
    }
  },
  components: {
  },

  created: function() {
    axios.get("/api/user/saved/" + this.$route.params.name)
      .then((response) => {
        this.players = response.data;
        alert("Player saved")
    

      })
      .catch(function(error) {
        alert(error);
      });
  
  },


}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: white;
}

h2 {
  font-weight: normal;
  color: black;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #871ca5;
}


</style>