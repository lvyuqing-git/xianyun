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
                   class="btn"
                   @click="clickCaptcha">发送验证码</el-button>

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
                 class="btnRegister" @click="userRegister">注册</el-button>
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
        username: '15360562781',
        nickname: 'aaaa',
        captcha: '000000',
        password: '123456',
        configPassword: '123456'
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
      //发送验证码
    clickCaptcha() {
      if (!this.registerForm.username) {
        this.$message({
          message: '手机号不能为空',
          type: 'warning'
        })
        return
      }
      this.$store
        .dispatch('user/register', { tel: this.registerForm.username })
    },
    //注册用户
    userRegister(){
        let rules = {
            username : {
                errMessage : '手机号不能为空',
                verification : ()=>{
                    return !!this.registerForm.username
                }
            },
             nickname : {
                errMessage : '昵称',
                verification : ()=>{
                    return !!this.registerForm.nickname
                }
            },
             captcha : {
                errMessage : '验证码不能为空',
                verification : ()=>{
                    return !!this.registerForm.captcha
                }
            },
             password : {
                errMessage : '密码不能为空',
                verification : ()=>{
                    return !!this.registerForm.password
                }
            },
             checkPass : {
                errMessage : '确认密码不能为空',
                verification : ()=>{
                    return !!this.registerForm.checkPass
                }
            },
        }
        let arr = Object.keys(rules)
        let valid = true
        arr.forEach((item)=>{
            if(!valid) return
            valid = item.verification
        })
         if(valid) return
       const {configPassword,...post} = this.registerForm
        this.$axios({
            url : '/accounts/register',
            method :'POST',
            data : post
        }).then((res)=>{
            console.log(res);
           
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