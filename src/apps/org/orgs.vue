<template>
  <div class="layout-orgs">
    <Row>
      <Col span="6" v-for="org in orgs" offset="1" style="margin-top: 20px">
      <Card class="layout-orgs-card">
        <p slot="title" class="layout-orgs-title">{{org.name}}</p>
        <a href="#" slot="extra" v-if="org.isAdmin">
          <Icon type="gear-b" size="25"></Icon>
        </a>
        <p class="layout-orgs-content" @click="goToPath(org)">
          &nbsp;&nbsp;&nbsp;&nbsp;{{org.intro?org.intro:org.name}}
        </p>
        <p class="layout-orgs-button">

          <span class="left"><Icon type="star" color="#80848f" size="18"></Icon></span>

          <span class="righe"><Icon type="person" size="18"></Icon><Badge :count="org.userCount"></Badge></span>
        </p>

      </Card>
      </Col>
      <Col span="6" offset="1" style="margin-top: 20px">

      <Card class="layout-orgs-add">
        <div @click="goToPath('/create/org')">
          <Icon type="plus-round" size="100"></Icon>
          <h1>创建团队</h1>
        </div>
      </Card>

      </Col>

      </Col>
    </Row>
  </div>

</template>
<script>
  import Api from '@Api'
  import HttpUtils from '../../utils/HttpUtils'
  export default {
    name: "task-orgs",
    data () {//数据
      return {
        orgs: [],//团队
      }
    },
    computed: {
      //计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果实例范畴之外的依赖 (比如非响应式的 not reactive) 是不会触发计算属性更新的。
    },
    methods: {
      getOrgs(){
        let that = this;
        HttpUtils.baseRequest(Api.org.orgs.url, Api.org.orgs.method, {}, function (data) {
          // data.push({'name': '创建组织', 'divided': true, 'path': '/create/org'});
          that.orgs = data;
          that.$store.state.orgs = data;
         // that.$store.commit('addOrgs',data);
         // that.$store.commit('addOrgs',data);
        }, function (error) {

        })
      },
      //跳转
      goToPath(obj){
        //uniqueId
        let that = this;
        if (typeof obj === 'string') {
          that.$router.push(obj);
        } else {
          //跳转控制台界面
          that.$router.push({path: 'org/'+obj.uniqueId, params: {uid: obj.uniqueId}});
          that.$store.state.currentOrgId=obj.uniqueId;
          //setCucurrentOrgId
        }

      }
    },
    created(){
      //实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见
    },
    mounted(){
      this.getOrgs();
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less">
  .layout-orgs {
    .layout-orgs-add {
      height: 256px;
      text-align: center;
      padding-top: 50px;
      background-color: #bbbec4;
      &:hover {
        background-color: #2d8cf0;
        color: #f8f8f9;
      }
    }
    .layout-orgs-card {
      height: 256px;
      max-height: 256px;
      .layout-orgs-title {
        text-align: center;

      }
      .layout-orgs-content {
        width: 105%;
        max-height: 140px;
        height: 140px;
        overflow: hidden;
      }
      .layout-orgs-button {
        border-top: solid 1px #dddee1;
        height: 50px;
        line-height: 50px;
        .left {
          /*float: left;*/
        }
        .right {
          margin-right: 10px;
          /*float: right;*/
        }
      }
    }
    /*background-color: #eeeeee;*/

  }
</style>
