<template>
  <div>
    首页
  </div>
</template>
<script>
  export default {
    name: "task-home",
    data () {//数据
      return {}
    },
    mounted(){
     // console.log(this.$store.state.menuList)
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
