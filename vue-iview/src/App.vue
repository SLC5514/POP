<template>
  <div id="app">
    <SlcMenu/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    SlcMenu: () => import('./components/SlcMenu.vue')
  }
}
</script>

<style lang="less">
  html,body {
    width: 100%;
    height: 100%;
  }
</style>
