<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" class="form">
      <el-form-item>
        <img src="../assets/avatar.jpg" class="login-img">
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="form.username" 
                placeholder="用户名" 
                prefix-icon="el-icon-phone-outline">
        </el-input>
      </el-form-item>
      <el-form-item  prop="password">
        <el-input v-model="form.password"
                placeholder="密码"
                type="password"
                prefix-icon="el-icon-view">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="login('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {loginPost} from '../api/index'

export default {
  data() {
    return {
      form:{
         username: '',
         password: ''
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
      }
    };
  },
  methods:{
    login(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(valid)
            loginPost(this.form)
              .then(res=>{
                if(res.meta.status === 200){
                    console.log(res);
                    localStorage.setItem("mytoken",res.data.token)
                    localStorage.setItem("myname",res.data.username)
                    this.$message({
                    message: res.meta.msg,
                    type: 'success'
                  });
                  this.$router.push('/home')
                }else{
                  this.$message({
                    message: res.meta.msg,
                    type: 'warning'
                  });
                }
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
  }
}
</script>
<style lang="less" scoped>
.login{
  width:100%;
  height: 100%;
  background: #2f4050;
  position: fixed;
  .form{
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: #fff;
    .login-img{
      position: relative;
      left: 6%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .btn{
      width:100%;
    }
  }
}

</style>


