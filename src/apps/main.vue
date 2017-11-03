<style type="text/less" lang="less">
  .inline-block{
    display: inline-block;
  }
  .layout {
    /*border: 1px solid #d7dde4;*/
    .layout-head {
      height: 60px;
      background: #1e384c;
      margin: 0 auto;
      .layout-logo {
        width: 200px;
        float: left;
        margin-left: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .layout-org {
        width: 15%;
        height: 60px;
        .ivu-dropdown{
          width: 300px;
          position: absolute;
          margin: 18px 20px;
          z-index: 9999;
        }
      }
      .layout-search {
        width: 20%;
        margin: 15px auto;

      }
      .layout-user{
        float: right;
      }
    }
  }
</style>
<template>
  <div class="layout">
    <div class="layout-head">

      <!--logo-->
      <div class="layout-logo inline-block">
        <img src="../assets/images/logo.jpg">
      </div>
        <!--org-->
      <div class="layout-org inline-block">
        <Dropdown trigger="click">
          <a href="javascript:void(0)">
            &nbsp;团队&nbsp;
            <Icon type="arrow-down-b"></Icon>
          </a>
          <DropdownMenu slot="list" v-for="org in this.$store.state.orgs" :key="org.uniqueId">
            <DropdownItem>{{org.name}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
        <!--search-->
      <div class="layout-search inline-block">
        <Input icon="ios-search" placeholder="search....">
        <Button slot="append" icon="ios-search"></Button>
        </Input>
      </div>
       <!--info-->
      <div class="layout-user inline-block">个人信息</div>
    </div>

    <div style="width: 99%; margin: 5px auto">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import Api from '@Api'
  import HttpUtils from '../utils/HttpUtils'
  export default {
    data () {
      return {
      }
    }
  }
</script>

