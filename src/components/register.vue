<template>
    <div class="register">
        <div>

            <!-- Modal Component -->
            <b-modal class = "regi" id="regform" ref="regform" title="Submit your account information" @ok="handleOk" @shown="clearData">
                <form @submit.stop.prevent="handleSubmit">
                    <b-form-input type="text" value="" placeholder="Enter your name" v-model="username"></b-form-input>
                    <b-form-input type="password" placeholder="Enter your password" v-model="password"></b-form-input>
                    <b-form-input type="password" placeholder="Re-enter your password" v-model="rePass"></b-form-input>
                </form>
            </b-modal>
        </div>
        
     
    </div>
    
</template>
<script>
import axios from 'axios';
export default {

    name: 'register',

    data: {
        username: '',
        password: '',
        rePass: '',

    },
    methods: {
        clearData() {
            this.username = '';
            this.password = '';
            this.rePass = '';

        },
        handleOk(e) {
            e.cancel();
            if (!this.username) {
                alert('Please enter your name');
            }
            else if (!this.password) {
                alert('Please enter your password');
            }
            else if (!this.rePass) {
                alert('Please re enter your password');
            }
            else if (this.password != this.rePass) {
                alert('Your passwords do not match');
            }

          

            else {
                this.handleSubmit()

            }
        },
        hideModal() {
            this.$refs.regform.hide();
        },
        handleSubmit() {


            axios.get(`/api/user/create/` + this.username + `/` + this.password, {
            })
                .then(response => {
                    alert(response.data);
                    hideModal();
                })
                .catch(e => {

                    this.errors.push(e)
                })


        },

    }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.regi {
    font-family: Arial, Helvetica, sans-serif; 
}
</style>