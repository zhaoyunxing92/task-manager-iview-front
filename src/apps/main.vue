<!--
<style lang="less">
  @import "../assets/css/main.less";
</style>
<template>
  <div class="main" :class="{'main-hide-text': hideMenuText}">
    &lt;!&ndash;logo&ndash;&gt;
    <div class="sidebar-menu-con"
         :style="{width: hideMenuText?'60px':'200px', overflow: hideMenuText ? 'visible' : 'auto', background: $store.state.menuTheme === 'dark'?'#495060':'white'}">
      <div class="logo-con">
        <img v-show="!hideMenuText" src="../assets/images/logo.jpg">
        <img v-show="hideMenuText" src="../assets/images/logo-min.jpg">
      </div>
      <sidebar-menu v-if="!hideMenuText" :menuList="menuList" :iconSize="14"/>
      <sidebar-menu-shrink :icon-color="menuIconColor" v-else :menuList="menuList"/>
    </div>
    <div class="main-header-con" :style="{paddingLeft: hideMenuText?'60px':'200px'}">
      <div class="main-header">
        <div class="navicon-con">
          &lt;!&ndash;菜单开关&ndash;&gt;
          <Button :style="{transform: 'rotateZ(' + (this.hideMenuText ? '-90' : '0') + 'deg)'}" type="text"
                  @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>

        &lt;!&ndash;<div class="header-middle-con">&ndash;&gt;
        &lt;!&ndash;&lt;!&ndash;面包屑&ndash;&gt;&ndash;&gt;
        &lt;!&ndash;<div class="main-breadcrumb">&ndash;&gt;
        &lt;!&ndash;<breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>&ndash;&gt;
        &lt;!&ndash;</div>&ndash;&gt;
        &lt;!&ndash;</div>&ndash;&gt;
        <div class="header-avator-con">
          &lt;!&ndash;<div @click="handleFullScreen" v-if="showFullScreenBtn" class="full-screen-btn-con">&ndash;&gt;
          &lt;!&ndash;<Tooltip :content="isFullScreen ? '退出全屏' : '全屏'" placement="bottom">&ndash;&gt;
          &lt;!&ndash;<Icon :type="isFullScreen ? 'arrow-shrink' : 'arrow-expand'" :size="23"></Icon>&ndash;&gt;
          &lt;!&ndash;</Tooltip>&ndash;&gt;
          &lt;!&ndash;</div>&ndash;&gt;
          &lt;!&ndash;<div @click="lockScreen" class="lock-screen-btn-con">&ndash;&gt;
          &lt;!&ndash;<Tooltip content="锁屏" placement="bottom">&ndash;&gt;
          &lt;!&ndash;<Icon type="locked" :size="20"></Icon>&ndash;&gt;
          &lt;!&ndash;</Tooltip>&ndash;&gt;
          &lt;!&ndash;</div>&ndash;&gt;

          &lt;!&ndash;信息&ndash;&gt;
          <div @click="goToPath('/message')" class="message-con">
            <Tooltip :content="messageCount > 0 ? '有' + messageCount + '条未读消息' : '无未读消息'" placement="bottom">
              <Badge :count="messageCount" dot>
                <Icon type="ios-bell" :size="22"></Icon>
              </Badge>
            </Tooltip>
          </div>
          &lt;!&ndash;主题&ndash;&gt;
          &lt;!&ndash;<div class="switch-theme-con">&ndash;&gt;
          &lt;!&ndash;<Row class="switch-theme" type="flex" justify="center" align="middle">&ndash;&gt;
          &lt;!&ndash;<theme-dropdown-menu></theme-dropdown-menu>&ndash;&gt;
          &lt;!&ndash;</Row>&ndash;&gt;
          &lt;!&ndash;</div>&ndash;&gt;

          &lt;!&ndash;账号&ndash;&gt;
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Dropdown trigger="click" @on-click="goToPath">
                <a href="javascript:void(0)">
                  <span class="main-user-name">{{ userName }}</span>
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">个人中心</DropdownItem>
                  <DropdownItem name="login" divided>退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
            </Row>
          </div>
        </div>
      </div>
      <div class="tags-con">
        <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
    </div>
    <div class="single-page-con" :style="{left: hideMenuText?'60px':'200px'}">
      <div class="single-page">

        <router-view/>

      </div>
    </div>
  </div>
</template>
<script>
  import sidebarMenu from '../components/sidebarMenu.vue';
  //import tagsPageOpened from '../components/tagsPageOpened.vue';
  import breadcrumbNav from '../components/breadcrumbNav.vue';
  //import themeDropdownMenu from '../components/themeDropdownMenu.vue';
  import sidebarMenuShrink from '../components/sidebarMenuShrink.vue';
  import Api from '@Api'
  import HttpUtils from '../utils/HttpUtils'
  export default {
    components: {

      sidebarMenu,
      //tagsPageOpened,
      breadcrumbNav,
      // themeDropdownMenu,
      sidebarMenuShrink
    },
    data () {
      return {
        userInfo: {},
        spanLeft: 4,
        spanRight: 20,
        orgs: [],
        currentOrgName: '',
        currentPageName: '',
        hideMenuText: false,  //是否展开
//        showFullScreenBtn: window.navigator.userAgent.indexOf('MSIE') < 0,
        isFullScreen: false,
        messageCount: 5,
        lockScreenSize: 0
      };
    },
    computed: {
      menuList () {
        return this.$store.state.menuList;
      },
      menuIconColor () {
        return this.$store.state.menuTheme === 'dark' ? 'white' : '#495060';
      },
    },
    methods: {
      //切换组织
      changeOrg(obj){
        let that = this;
        that.currentOrgName = obj.name;
        if (obj.path) { //跳转到创建组织界面
          this.$router.push(obj.path);
        } else {
          that.$store.state.currentOrgId = obj.uniqueId
        }

      },
      goToPath(key){
        this.$router.push(key);
      },
      toggleClick () {
        this.hideMenuText = !this.hideMenuText;
      },
      /**获取全部组织*/
      getOrgs(){
        let that = this;
        HttpUtils.baseRequest(Api.org.orgs.url, Api.org.orgs.method, {}, function (data) {
          data.push({'name': '创建组织', 'divided': true, 'path': '/create/org'});
          that.orgs = data;
          that.currentOrgName = data[0].name;
          // data[0].selected = true;
        }, function (error) {

        })
      }
    },
    created () {
      let that = this;
      // 查找当前用户之前登录时设置的主题
      let user = localStorage.getItem("userInfo");
      that.userInfo.email = JSON.parse(user).email;
      that.userInfo.account = JSON.parse(user).account;
      that.userInfo.avatar = JSON.parse(user).avatar;
      that.getOrgs();
    }
//    mounted () {
//      this.init();
//      // 全屏相关
//      document.addEventListener('fullscreenchange', () => {
//        this.isFullScreen = !this.isFullScreen;
//      });
//      document.addEventListener('mozfullscreenchange', () => {
//        this.isFullScreen = !this.isFullScreen;
//      });
//      document.addEventListener('webkitfullscreenchange', () => {
//        this.isFullScreen = !this.isFullScreen;
//      });
//      document.addEventListener('msfullscreenchange', () => {
//        this.isFullScreen = !this.isFullScreen;
//      });
//      // 锁屏相关
//      let lockScreenBack = document.getElementById('lock_screen_back');
//      let x = document.body.clientWidth;
//      let y = document.body.clientHeight;
//      let r = Math.sqrt(x * x + y * y);
//      let size = parseInt(r);
//      this.lockScreenSize = size;
//      window.addEventListener('resize', () => {
//        let x = document.body.clientWidth;
//        let y = document.body.clientHeight;
//        let r = Math.sqrt(x * x + y * y);
//        let size = parseInt(r);
//        this.lockScreenSize = size;
//        lockScreenBack.style.transition = 'all 0s';
//        lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
//      });
//      lockScreenBack.style.width = lockScreenBack.style.height = size + 'px';
//      // 问候信息相关
//      if (!Cookies.get('hasGreet')) {
//        let now = new Date();
//        let hour = now.getHours();
//        let greetingWord = {
//          title: '',
//          words: ''
//        };
//        let userName = Cookies.get('user');
//        if (hour < 6) {
//          greetingWord = {title: '凌晨好~' + userName, words: '早起的鸟儿有虫吃~'};
//        } else if (hour >= 6 && hour < 9) {
//          greetingWord = {title: '早上好~' + userName, words: '来一杯咖啡开启美好的一天~'};
//        } else if (hour >= 9 && hour < 12) {
//          greetingWord = {title: '上午好~' + userName, words: '工作要加油哦~'};
//        } else if (hour >= 12 && hour < 14) {
//          greetingWord = {title: '中午好~' + userName, words: '午饭要吃饱~'};
//        } else if (hour >= 14 && hour < 17) {
//          greetingWord = {title: '下午好~' + userName, words: '下午也要活力满满哦~'};
//        } else if (hour >= 17 && hour < 19) {
//          greetingWord = {title: '傍晚好~' + userName, words: '下班没事问候下爸妈吧~'};
//        } else if (hour >= 19 && hour < 21) {
//          greetingWord = {title: '晚上好~' + userName, words: '工作之余品一品书香吧~'};
//        } else {
//          greetingWord = {title: '深夜好~' + userName, words: '夜深了，注意休息哦~'};
//        }
//        this.$Notice.config({
//          top: 130
//        });
//        this.$Notice.info({
//          title: greetingWord.title,
//          desc: greetingWord.words,
//          duration: 4,
//          name: 'greeting'
//        });
//        Cookies.set('hasGreet', 1);
//      }
//    },
//    created () {
//      // 查找当前用户之前登录时设置的主题
//      let name = Cookies.get('user');
//      if (localStorage.theme) {
//        let hasThisUser = JSON.parse(localStorage.theme).some(item => {
//          if (item.userName === name) {
//            this.$store.commit('changeMenuTheme', item.menuTheme);
//            this.$store.commit('changeMainTheme', item.mainTheme);
//            return true;
//          } else {
//            return false;
//          }
//        });
//        if (!hasThisUser) {
//          this.$store.commit('changeMenuTheme', 'dark');
//          this.$store.commit('changeMainTheme', 'b');
//        }
//      } else {
//        this.$store.commit('changeMenuTheme', 'dark');
//        this.$store.commit('changeMainTheme', 'b');
//      }
//      // 根据用户设置主题
//      if (this.$store.state.theme !== 'b') {
//        let stylesheetPath = './dist/' + this.$store.state.theme + '.css';
//        let themeLink = document.querySelector('link[name="theme"]');
//        themeLink.setAttribute('href', stylesheetPath);
//      }
//      // 显示打开的页面的列表
//      this.$store.commit('setOpenedList');
//    }

  };
</script>
-->
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
          <DropdownMenu slot="list" v-for="org in this.$store.state.orgs">
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

