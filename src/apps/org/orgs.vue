<template>
  <div>
    <Row>
      <Col span="6">
      <Card>
        <p slot="title">
          <Icon type="android-bookmark" color="red"></Icon>
          杭州孚嘉科技
        </p>
        <div style="text-align:center">
          <img src="../../assets/logo.png">
          <h3>一套基于 Vue.js 的高质量UI组件库</h3>
        </div>
      </Card>
      </Col>
    </Row>

  </div>
</template>
<script>
  export default {
    name: "task-orgs",
    data () {//数据
      return {}
    },

    methods: {
      //methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
    },
    beforeCreate(){
      //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
