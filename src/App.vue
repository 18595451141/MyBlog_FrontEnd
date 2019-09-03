<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style>
  #app {
    text-align: center;
    margin-top: 60px;
  }
</style>
<!--<template>
  <div>
    前后端跨域示例：测试跨域=><button @click="test">hahaha</button>
    <main-header></main-header>
  </div>
</template>
<script>
  import axios from "axios"
  import mainHeader from "./components/module/main_header"
  export default{
    name:'HelloWorld',
    methods:{
      test(){
        axios.post("FindUsers").then(function(ret){
          alert(1);
        })
      }
    },
    components:{
      mainHeader
    }
  }
</script>-->
