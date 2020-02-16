<template>
  <div>
    <el-form :model="registerForm"
             :rules="rules"
             ref="registerForm"
             label-width="70px"
             class="demo-ruleForm">
      <el-form-item label="手机号"
                    prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称"
                    prop="nickname">
        <el-input v-model="registerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="验证码"
                    prop="captcha">
        <el-input v-model="registerForm.captcha"
                  class="captcha">
        </el-input>
        <el-button type="primary"
                   class="btn">发送验证码</el-button>

      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"
                    prop="checkPass">
        <el-input v-model="registerForm.configPassword"></el-input>
      </el-form-item>
      <el-button type="primary"
                 class="btnRegister"
                 @click="register">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.registerForm.configPassword !== '') {
          this.$refs.registerForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      registerForm: {
        username: '',
        nickname: '',
        captcha: '',
        password: '',
        configPassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        nickname: [{ required: true, message: '请输入昵称', trigger: 'blur' }],
        captcha: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    register() {
      this.$axios({
        url: '/captchas',
        method: 'POST',
        data: {
          tel: this.registerForm.username
        }
      }).then(res => {
        console.log(res)
      })
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
.btnRegister {
  margin-bottom: 20px;
  padding: 15px 30px;
}
/deep/.el-form-item__error {
  left: 32px;
}
</style>