<template>
  <div id="app">

  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
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
