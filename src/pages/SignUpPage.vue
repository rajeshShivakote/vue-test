<template>
    <h1>Sign Up</h1>
    <label for="username">Username</label>
    <input id="username" v-model="username" />

    <label for="email">Email</label>
    <input id="email" v-model="email" />

    <label for="password">Password</label>
    <input id="password" type="password" v-model="password" />

    <label for="password-repeat">Password Repeat</label>
    <input id="password-repeat" type="password" v-model="passwordRepeat"/>
    <button :disabled="isDisabledComputed" @click="submit">Sign Up</button>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUpPage",
    data() {
        return {
            disabled: true,
            email: "",
            password: "",
            passwordRepeat: "",
            username: ""
        }
    },
    methods:{
        submit(){
            axios.post("/api/1.0/users",{
                username: this.username,
                email: this.email,
                password: this.password
            })
        }
    },
    computed:{
        isDisabledComputed(){
        return this.password && this.passwordRepeat ? this.password !== this.passwordRepeat : true

        }
    }
}
</script>