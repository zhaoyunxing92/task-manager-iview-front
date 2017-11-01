<template>
  <div>

    <div class="layout-orgs-assistant">
      <!--<Affix>-->
        <!--org菜单-->
        <Menu mode="horizontal" :active-name="currentPath" @on-select="goToPath" class="layout-orgs-assistant">
          <MenuItem :name="orgMenu.name" :class="orgMenu.right ? 'menu-item-right':'' "
                    v-for="orgMenu in $store.state.orgMenuList">
            <Icon :type="orgMenu.icon"></Icon>
            {{orgMenu.menuName}}
          </MenuItem>
        </Menu>
      <!--</Affix>-->
    </div>

    <div class="layout-orgs-assistant-content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        currentPath: this.$route.name
      }
    },
    created(){
//      let that = this;
//      that.currentPath = that.$route.path;
//      that.rootPath = that.currentPath.substr(0, that.currentPath.lastIndexOf('/') + 1);
    },
    methods: {
      //跳转
      goToPath(key){
        this.$router.push({name: key});
      }
    },
  }
</script>
<style type="text/less" lang="less">
  .layout-orgs-assistant {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    background-color: white;

  }

  .layout-orgs-assistant-content {
    margin: 20px auto;
    background-color: white;
  }
</style>
