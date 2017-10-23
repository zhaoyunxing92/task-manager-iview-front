<template>
  <div class="login-layout">
    <div class="content">

      <Form :rules="LoginFormRule" :model="LoginForm" ref="LoginForm">
        <FormItem prop="account">
          <Input type="text" v-model="LoginForm.account" placeholder="请输入邮箱/手机号/账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="LoginForm.password" placeholder="请输入密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long shape="circle" :loading="loading" @click="login('LoginForm')">登录</Button>
        </FormItem>
      </Form>

    </div>

  </div>

</template>
<style type="text/less" lang="less">
  .login-layout {
    width: 100%;
    height: 100%;
    .content {
      max-width: 300px;
      max-height: 560px;
      min-height: 300px;
      padding: 20px 30px;
      margin: 60px auto;
      width: 80%;
      height: 80%;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        loading: false,
        LoginForm: {
          account: '',
          password: ''
        },
        LoginFormRule: {
          account: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
//            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$Message.success('提交成功!');
          }
        })
      }
    }
  }
</script>

