<template>
  <div class="login">
    <div class="white-area">
      <el-form
        :model="loginUser"
        ref="loginUser"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
        <svg-icon icon-class="books" />
        <h3 class="title">生活笔记</h3>
        <el-form-item prop="account">
          <el-input
            type="text"
            v-model="loginUser.account"
            auto-complete="off"
            placeholder="账号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="loginUser.password"
            auto-complete="off"
            placeholder="密码"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
            @click.native.prevent="loginSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="typing">
        <vue-typer
          :text="describe"
          :preTypeDelay="2000"
          :typeDelay="100"
          :preEraseDelay="2000"
          :eraseDelay="1000"
        ></vue-typer>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "@/utils/request.js"
import { log } from 'util';
export default {
  name: "Login",
  data() {
    var describe = ["没有梦想的国度，只有向往的生活"];
    return {
      describe,
      loginUser: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    loginSubmit() {
      request("post", "/demo", {a:"a",b:"b"}).then(data => {
        console.log(data);
      })
      if (this.loginUser.account && this.loginUser.password) {
        //login success
        this.$message({
          message: "Login Success",
          type: "success"
        });
      } else {
        //login failed
        this.$message({
          message: "Login Failed",
          type: "error"
        });
        return false;
      }
    }
  }
};
</script>
<style type="text/less" lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("./static/login.jpg") center center no-repeat;
  background-size: cover;
  height: 100%;
  position: fixed;

  .white-area {
    margin-left: 30%;
    overflow: hidden;
    background: #ffffff;
    width: 40%;
    height: 100%;

    .login-container {
      /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      // margin: 10% 5%;
      padding: 35px 35px 15px 35px;
      background: #fff;
      filter: alpha(opacity=50);
      background-color: rgba(255, 255, 255, 0.3);

      .el-input__inner {
        background-color: rgba(255, 255, 255, 0);
      }

      .svg-icon {
        width: 40px;
      }

      .title {
        font-size: 20px;
        font-family: Sans-serif;
        margin: 0px auto 20px auto;
        text-align: center;
        color: #292a2b;
      }

      .remember {
        margin: 0px 0px 35px 0px;
      }
    }

    .typing {
      font-size: 15px;
      width: 100%;
    }
  }
}
</style>
