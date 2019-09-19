<template>
  <div class="login">
    <!-- <el-image style="width: 100px; height: 100px" src="../../static/login.jpg" fit="fill"></el-image> -->
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-container"
    >
      <h3 class="title">生活笔记</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm2.checkPass"
          auto-complete="off"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      } else if (value.length < 4 || value.length > 12) {
        return callback(new Error("账号名必须在4~12位"));
      } else {
        callback();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      } else if (value.length < 2) {
        return callback(new Error("密码不能小于两位"));
      } else {
        return callback();
      }
    };
    return {
      ruleForm2: {
        account: "",
        checkPass: ""
      },
      rules2: {
        account: [{ validator: checkAccount, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit2(ruleForm2) {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          alert("提交！");
        } else {
          alert("登陆失败！");
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

