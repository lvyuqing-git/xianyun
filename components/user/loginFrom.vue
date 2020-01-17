<template>
  <div>
    <el-form :model="loginForm"
             :rules="rules"
             ref="loginForm"
             label-width="80px">
      <el-form-item label="用户名"
                    prop="username">
        <el-input type="text"
                  v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码"
                    prop="password">
        <el-input type="password"
                  v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      let reg = /^1[3,5,6,9]\d{9}$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确格式的用户名'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '13800138000',
        password: '123456'
      },
      rules: {
        username: [
          { validator: validatePass, trigger: 'blur', required: true }
        ],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }]
      }
    }
  },
  methods: {
    submitForm() {
      console.log(this.$refs.loginForm)

      this.$refs.loginForm.validate(boolean => {
        if (boolean) {
          this.$axios({
            method: 'post',
            url: '/accounts/login',
            data: this.loginForm
          })
            .then(res => {
              console.log(res)
              this.$store.commit('user/setUserInfo', res.data)
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
/deep/.el-form{
    margin-top: 30px;
}
/deep/.el-input__inner {
    width: 85%
}
</style>