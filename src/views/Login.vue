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
        <svg-icon iconClass="books"></svg-icon>
        <h3 class="title">生活笔记</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="loginUser.account" auto-complete="off" placeholder="账号" clearable></el-input>
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
          <el-button type="primary" style="width:100%;" @click.native.prevent="loginSubmit">登录</el-button>
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
export default {
  name: "Login",
  data() {
    var describe = [
      "这是一个安静的空间 ——Jimary Xia",
      "希望可以在这里沉淀自己，进而蜕变!"
    ];
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
      if ( this.loginUser.account && this.loginUser.password ) {
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
