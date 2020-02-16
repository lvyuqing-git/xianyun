<template>
  <div>
    <el-form :model="registerForm"
             :rules="registerForm"
             ref="registerForm"
             label-width="70px"
             class="demo-ruleForm">
      <el-form-item label="手机号"
                    prop="name">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称"
                    prop="name">
        <el-input v-model="registerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="验证码"
                    prop="name">
        <el-input v-model="registerForm.captcha"
                  class="captcha">
        </el-input>
        <el-button type="primary"
                   class="btn">发送验证码</el-button>

      </el-form-item>
      <el-form-item label="密码"
                    prop="name">
        <el-input v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="name">
        <el-input v-model="registerForm.configPassword"></el-input>
      </el-form-item>
      <el-button type="primary" class="btnRegister">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: '',
        nickname: '',
        captcha: '',
        password: '',
        configPassword: ''
      }
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.el-form {
  margin-top: 20px;
  text-align: center;
}
/deep/.el-input__inner {
  width: 85%;
}
/deep/.el-form-item__label {
  padding: 0;
}
.captcha {
  width: 70%;
}
.el-input {
  margin: -13px;
}
.btn {
  width: 25%;
}
.el-button {
  padding: 12px 6px;
}
.btnRegister{
    margin-bottom: 20px;
    padding: 15px 30px;
}
</style>