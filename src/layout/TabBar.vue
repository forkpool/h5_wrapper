<template>
  <div class="tab-bar__container">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data: () => ({
    active: 0,
    a: '123'
  })
}
</script>

<style lang="scss" scoped>
.tab-bar__container {
  height: 50px;
}
</style>