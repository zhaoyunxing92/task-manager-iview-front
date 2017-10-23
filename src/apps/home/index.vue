<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <!--logo-->
        <div class="layout-logo-left">{{orgName}}</div>

        <Menu :active-name="setActive" width="auto" @on-select="goToPath">
          <MenuGroup title="团队">
            <Menu-item name="/orgs">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">团队列表</span>
            </Menu-item>
            <Menu-item name="/orgs/projects">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">团队项目</span>
            </Menu-item>
            <Menu-item name="/orgs/tasks">
              <Icon type="ios-navigate" :size="iconSize"></Icon>
              <span class="layout-text">团队任务</span>
            </Menu-item>
          </MenuGroup>

          <MenuGroup title="任务">
            <Menu-item name="2">
              <Icon type="ios-keypad" :size="iconSize"></Icon>
              <span class="layout-text">我的任务</span>
            </Menu-item>
            <Menu-item name="3">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">我创建的</span>
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">未完成的</span>
            </Menu-item>
          </MenuGroup>

          <MenuGroup title="我的">
            <Menu-item name="4">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">我的信息</span>
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">我的权限</span>
            </Menu-item>
          </MenuGroup>
          <MenuGroup title="系统">
            <Menu-item name="4">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">设置</span>
            </Menu-item>
            <Menu-item name="4">
              <Icon type="ios-analytics" :size="iconSize"></Icon>
              <span class="layout-text">退出</span>
            </Menu-item>
          </MenuGroup>

        </Menu>
      </i-col>

      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
          <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view/>
          </div>
        </div>
        <div class="layout-copy">
          sunny
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        spanLeft: 3,
        spanRight: 21,
        orgName: 'sdfds'
      }
    },
    computed: {
      iconSize () {
        return this.spanLeft === 3 ? 16 : 26;
      },
      setActive() {
        return this.$route.path;
      }
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 3) {
          this.spanLeft = 1;
          this.spanRight = 23;
        } else {
          this.spanLeft = 3;
          this.spanRight = 21;
        }
      },
      goToPath(key){
        //console.log(this.$route.path)
        // console.log(this.$router.app.)
        this.$router.push(key)
      }
    }
  }
</script>
<style scoped>
  .layout {
    height: 500px;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 200px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-menu-left {
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    /*border: solid 1px;*/
    /*background: #464c5b;*/
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    height: 60px;
    line-height: 60px;
    color: #ffffff;
    background: #5b6270;
    border-radius: 3px;
    text-align: center;
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .ivu-col {
    transition: width .2s ease-in-out;
  }
</style>
