<template>
  <div>
    <button @click="test">hahaha</button> 测试跨域
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
</script>
