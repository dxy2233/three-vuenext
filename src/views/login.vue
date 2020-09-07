<template>
  <div class="login">
    <img src="/@img/logo.png" class="title-img" />
    <div class="content">
      <img src="/@img/loginpic.png" />
      <div class="box">
        <h3>个人登录</h3>
        <span>
          <SvgIcon icon-class="accounts" />
          <!-- <SvgIcon icon-class="accounts"></SvgIcon> -->
          <ButtonCounter />
          <!-- <svg-icon icon-class="accounts" /> -->
          <input
            v-model="form.username"
            type="text"
            placeholder="您的账号"
            @keyup.enter="login"
          />
        </span>
        <span>
          <svg-icon icon-class="pass" />
          <input
            v-model="form.password"
            type="password"
            placeholder="您的密码"
            @keyup.enter="login"
          />
        </span>
        <span>
          <svg-icon icon-class="vcode" />
          <input
            v-model="form.verCode"
            type="text"
            placeholder="验证码"
            class="vcode"
            @keyup.enter="login"
          />
          <img :src="verifyImg" alt="" @click="getVerifyImg" />
        </span>
        <button @click="login">登 录</button>
      </div>
    </div>
    <footer>©重庆贝特计算机系统工程有限公司</footer>
  </div>
</template>

<script>
// import { getVerify } from '@api/login'
// import { salt } from '@/utils/validate'
// import sha1 from 'crypto-js/sha1'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        verCode: '',
        verCodeId: '',
      },
      verifyImg: '',
    }
  },
  created() {
    // 防止路由重复
    // if (this.$route.params.reset) location.reload()
    // this.getVerifyImg()
  },
  methods: {
    login() {
      console.log('login')
      // let formData = new FormData()
      // for (const i in this.form) formData.append(i, this.form[i])
      // formData.set('password', sha1(salt(formData.get('password'))).toString())
      // this.$store
      //   .dispatch('user/login', formData)
      //   .then(() => {
      //     this.$router.push({ path: '/' }).catch(() => {})
      //   })
      //   .catch(() => {
      //     this.form.verCode = ''
      //     this.getVerifyImg()
      //   })
    },
    getVerifyImg() {
      console.log('verify')
      // getVerify().then((res) => {
      //   this.verifyImg = res.data.base64
      //   this.form.verCodeId = res.data.verCodeId
      // })
    },
  },
}
</script>

<style lang="postcss" scoped>
.login {
  min-width: 850px;
  height: 100vh;
  background: url('/@img/pagebg.jpg') no-repeat;
  color: #fff;
  .title-img {
    display: block;
    width: 850px;
    padding: 30px 0;
    margin: 0 auto;
  }
  .content {
    display: flex;
    padding: 50px 0;
    background: rgba(0, 100, 255, 0.6);
    justify-content: center;
    .box {
      text-align: center;
      width: 260px;
      height: 240px;
      background: url('/@img/line.png') no-repeat center;
      padding: 40px 30px;
      margin-left: 40px;
      /* span {
        display: block;
        position: relative;
        margin: 12px 0;
        text-align: left;
        svg {
          height: 100%;
          padding: 0 10px;
          position: absolute;
          color: #0065ff;
        }
        input {
          padding: 0 30px;
          width: 100%;
          height: 35px;
          box-sizing: border-box;
        }
        input.vcode {
          padding: 0 30px;
          width: 60%;
          margin: 0 5px 0 0;
        }
        img {
          position: absolute;
        }
      } */
      button {
        background: #f68c24;
        margin: 5px 0;
        height: 35px;
        width: 100%;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
  footer {
    position: fixed;
    bottom: 30px;
    font-size: 12px;
    text-align: center;
    width: 100%;
  }
}
</style>
