<template>
  <div id="UserLogin" style="text-align: center;">
    <h1>{{ message }}</h1>
    账号：<input type="text" v-model="User_accountNumber" name="User_accountNumber"/><br/>
    密码：<input type="text" v-model="User_password" name="User_password"/><br/>
    <input type="button" value="提交" @click="Usersubmit()"/>
  </div>
</template>

<script>
  import axios from "axios"

    export default {
        name: "UserLogin",
        data(){
          return{
            User_accountNumber: '张三',
            User_password:'123456',
            message: 'Welcome to Hongdi Blog'
          }
        },methods:{ //methods 方法
          Usersubmit:function(){
            //赋值传参
            var params = new URLSearchParams()
            params.append('User_accountNumber',this.User_accountNumber)
            params.append('User_password',this.User_password)
            axios.post("/Users/UsersLogin",params).then(res => {
              //成功回调
              if(res.data){
                /*
                路由跳转页面
                   push('/home/first')// 对象
                   push({path: '/home/first' } )// 字符串
                   push({ name: 'home', params: { userId: wise }}) // 命名的路由
                */
                this.$router.push({ path: '/HomePage' })
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
