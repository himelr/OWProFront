<template>
    <div class="login">
        <div class="center_div">
            <form action="/login" method="post">
                <br>
                <div class="form-group">
                    <label for="user">Username</label>
                    <input id="user" type="text" class="form-control regi" name="username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input id="password" type="password" class="form-control regi" name="password">
                </div>

                <button id="searchBut" type="submit" class="btn btn-warning btn-lg shadow">Login</button>
            </form>
        </div>
        <br>
        <b-btn class="shadow" v-b-modal="'regform'">Register</b-btn>
        <register></register>
    </div>
</template>
<script>
import axios from 'axios';
import register from './register.vue'
export default {

    name: 'login',
    components: {
        register

    },

    data: {
        username: '',
        password: ''

    },
    methods: {
        clearData() {
            this.username = '';
            this.password = '';

        },
        handleOk(e) {
            e.cancel();
            if (!this.username) {
                alert('Please enter your name');
            }
            else if (!this.password) {
                alert('Please enter your password');
            }
            else {
                this.handleLogin()

            }
        },
        handleLogin() {


            axios.post(`/login`, {
                username: this.username,
                password: this.password

            })
                .then(response => { })
                .catch(e => {
                    this.errors.push(e)
                })

            this.clearData();
            this.$refs.modal1.hide()
        },

    }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center_div {
    margin: 0 auto;
    width: 30%/* value of your choice which suits your alignment */
}

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
    color: navy;
}

label {
    color: black;
}

input {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

#searchBut {
    background-color: navy;
    border-color: navy;
    color: white;
}
.regi {
    font-family: Arial, Helvetica, sans-serif; 
}
</style>