<template>
  <div id="app">

<!--    <section class="home-wrapper">
      <div class="home-back">
        <img class="back-img" src="/static/img/background-home.jpg" style="width:100%">
      </div>
      
    </section>
    -->

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">

      <div class="container">

        <div>
          <router-link class="navbar-brand" v-bind:to="'/'">
        <div><h4> OWPro </h4></div>
          </router-link>

        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>

        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">

          <ul class="navbar-nav ml-auto">
          
         <li class="nav-item" v-if="this.username != null">
              <router-link class="nav-link owo" v-bind:to="'/profile/'+ username">Profile {{username}}</router-link>
            </li>  

            <li class="nav-item">
              <router-link class="nav-link owo" v-bind:to="'/leaderboard/'">Pro Leaderboard</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link owo" v-bind:to="'/heroboard/'">Pro Hero Statistics</router-link>
            </li> 
            <li class="nav-item" v-if="this.username != null">

              <a class="nav-link" href="/logout">{{this.username}} Logout!</a>

            </li>

            <li class="nav-item owo" v-else>
              <router-link class="nav-link" v-bind:to="'/login'">Login</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

   

    <!-- the router outlet, where all matched components would ber viewed -->

    <!--  <router-link v-bind:to="'/about'">About</router-link> -->

    <div id="render">
      <router-view></router-view>
    </div>

       

  </div>
</template>


<script>
import register from './components/register.vue'
import axios from 'axios';
export default {
  name: 'app',
  components: {
    register
  },
  data() {
    return {
      username: null,
      



    }
  },
  created: function() {

    axios.get("/api/user/get/")
      .then((response) => {
        this.username = response.data;
      })
      .catch(function(error) {

      });
  },

}

</script>

<!-- styling for the component -->
<style>

#app {
  font-family: 'Overwatch2','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  font-size: 1.5em;
}
@font-face { 
    font-family: "Overwatch"; 
    src: url("https://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff") format('woff');
}


body,
h1,
h2,
h3,
h5,
h6 {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
}
h4{
  font-family: 'Overwatch'
}
@font-face {
    font-family: "Overwatch2";
    src: url('/static/css/big_noodle_titling.woff2') format('woff2'),
        url('/static/css/big_noodle_titling.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


body {
/*   background: url(/static/img/free-purple-triangles-vector.jpg); */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.navbar {   
  background-color:  navy;  
  border-bottom-style: solid;
  border-bottom-color: rgb(239, 241, 242);
  border-bottom-width: 0;
  box-shadow: none;
}
<!--.navbar:hover {
  display: block;  
  background-color:white;  
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-delay: initial;
}-->

.home-back { 
  position: absolute;
  width: 100%;
  height: auto;  
  box-shadow: 1px 1px 23px 0 rgba(0,0,0,.6);
}

.home-wrapper {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
}
/* #app { 
    font-family: "Overwatch"; 
    src: url("https://us.battle.net/forums/static/fonts/bignoodletoo/bignoodletoo.woff") format('woff');
} */



.navbar .navbar-brand {
  color: #ecf0f1;
}

.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #a7dff4;
}

.navbar .navbar-text {
  color: #ecf0f1;
}

.navbar .navbar-nav .nav-link {
  color: #ecf0f1;
  border-radius: .25rem;
  margin: 0 0.25em;
}

.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #a7dff4;
}

.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #a7dff4;
  background-color: #0091c5;
}

.navbar .navbar-toggle {
  border-color: #0091c5;
}

.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #0091c5;
}

.navbar .navbar-toggle .navbar-toggler-icon {
  color: #ecf0f1;
}

.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ecf0f1;
}

.navbar .navbar-link {
  color: #ecf0f1;
}

.navbar .navbar-link:hover {
  color: #a7dff4;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ecf0f1;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #a7dff4;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #a7dff4;
    background-color: #0091c5;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ecf0f1;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #a7dff4;
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #a7dff4;
  background-color: #0091c5;
}




/* .owo {

  color: black;
} */
</style>