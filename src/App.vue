<template>
<div class="box">
  <router-link to="/">首页</router-link>
  <img class="img" alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/setting">设置</router-link>
  <p>路由：{{routeName}}</p>
  <router-view />
</div>
</template>

<script lang="ts">
import {
  ref,
  watch,
  provide, // 设置一个被注入到应用范围内所有组件中的值
  getCurrentInstance
} from 'vue'
export default {
  name: 'App',
  setup(props) {
    // provide('keyData', {a: 0, b: 0}) // 注入
    const { ctx }: any = getCurrentInstance()
    let routeName = ref('--')
    routeName.value = ctx.$router.currentRoute.value.name

    watch(() => ctx.$router.currentRoute.value.name, () => {
      routeName.value = ctx.$router.currentRoute.value.name
    })
    return {
      routeName
    }
  },
}
</script>

<style lang="stylus" scoped>
.box{
  .img{
    width 180px
  }
}
</style>
