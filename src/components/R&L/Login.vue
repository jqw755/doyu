<template>
  <div class="L_container">
    <head_nav></head_nav>
    <div v-if="is_account">
      <div class="account">
        <input type="text" placeholder="请输入账户名" id="account">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" id="pwd">
      </div>
      <div class="submit_btn">
        <button class="btn" @click="login">立即登陆</button>
      </div>
    </div>
    <div class="logined" v-else="is_account">
      <p>
        <span>{{user}}</span>
        您已登录
      </p>
      <button class="btn loginOut" @click="loginOut">退出</button>
    </div>
    <div :class="[{tip_tran:show_tip},'tip']" v-show="show_tip">{{v_info}}</div>
  </div>
</template>

<script>
  import head_nav from '../Other/HeadNav2'
  export default{
    data(){
      return {
        v_info: '',
        show_tip: false,
        is_account:false,
        user:''
      }
    },
    methods: {
      focus(msg){
        const self = this;
        self.v_info = msg;
        if (self.show_tip === false) {
          self.show_tip = true;
          setTimeout(function () {
            self.show_tip = false;
          }, 2500);
        }
      },
      login(){
        let acc = document.getElementById('account'),
          pwd_ipt = document.getElementById('pwd');
        if (acc.value === '') {
          this.focus('请输入账户名');
          return false;
        }
        if (pwd_ipt.value === '') {
          this.focus('请输入密码');
          return false;
        }
        sessionStorage.setItem('account', acc.value);
        sessionStorage.setItem('pwd', pwd_ipt.value);
        this.focus('登陆成功,即将跳转到首页');
        setTimeout(function () {
            window.location = '/home';
//          console.log(this.$route)
        }, 800);
      },
      loginOut() {
        sessionStorage.removeItem('account');
        sessionStorage.removeItem('pwd');
        window.location.reload();
      }
    },
    mounted() {
      const userName = sessionStorage.getItem('account');
        if(userName){
            this.is_account = false;
            this.user = userName;
        }else{
          this.is_account = true;
        }
    },
    components:{head_nav}
  }
</script>

<style>
  .L_container {
    font-size: 0.9rem;
  }

  .logined p{
    height:3rem;
    line-height:3rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .logined p span{
    color: #e8c828;
  }

  .loginOut{
    position: absolute;
    bottom:3rem;
  }

  .L_container input {
    width: 80%;
    height: 90%;
    border: 0;
    outline: none;
    color: #e8c828;
  }

  .account, .pwd {
    width: 90%;
    height: 3rem;
    line-height: 3rem;
    margin-left: 5%;
    border-bottom: 1px solid #e8c828;
  }

  .btn {
    width: 60%;
    height: 3rem;
    color: #e8c828;
    margin-top: 2rem;
    margin-left: 20%;
    background: #333;
    border: 0;
  }

  .tip {
    /*width: 40%;*/
    padding: 0 0.5rem 0 0.5rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 7px;
    color: #fff;
    text-align: center;
    background: #FA7122;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  .tip_tran {
    -webkit-animation: tip_ani 0.6s;
    animation: tip_ani 0.6s;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }

  @keyframes tip_ani {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -3.5rem);
      -webkit-transform: translate(-50%, -3.5rem);
    }
  }

  @-webkit-keyframes tip_ani {
    from {
      opacity: 0;
      transform: translate(-50%, 0);
      -webkit-transform: translate(-50%, 0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -3.5rem);
      -webkit-transform: translate(-50%, -3.5rem);
    }
  }
</style>
