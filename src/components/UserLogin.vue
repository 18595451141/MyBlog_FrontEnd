<template>
  <div id="UserLogin" style="text-align: center;">
    <h1>{{ message }}</h1>
    账号：<input type="text" v-model="User_Name" name="User_Name"/><br/>
    密码：<input type="text" v-model="User_Pwd" name="User_Pwd"/><br/>
    <input type="button" value="提交" @click="Usersubmit()"/>
  </div>
</template>

<script>
  import axios from "axios"

    export default {
        name: "UserLogin",
        data(){
          return{
            User_Name: '张三',
            User_Pwd:'',
            message: 'Welcome to Hongdi Blog'
          }
        },methods:{ //methods 方法
          Usersubmit:function(){
            //赋值传参
            var params = new URLSearchParams()
            params.append('User_Name',this.User_Name)
            params.append('User_Pwd',this.User_Pwd)
            axios.post("/UsersLogin",params).then(res => {
              //成功回调
              if(res.data){
                /*
                路由跳转页面
                   push('/home/first')// 对象
                   push({path: '/home/first' } )// 字符串
                   push({ name: 'home', params: { userId: wise }}) // 命名的路由
                */
                this.$router.push({ path: '/test2' })
              }else{
                console.log("密码错误");
              }
            }, err => {
              //错误回调
              console.log(err.response);
            })
          }
        }
    }
</script>

<style scoped>

</style>
