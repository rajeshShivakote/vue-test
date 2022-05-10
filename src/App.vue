<template>
  <SignUpPage></SignUpPage>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SignUpPage from '@/pages/SignUpPage';
export default {
  name: 'App',
  components: {
    SignUpPage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
