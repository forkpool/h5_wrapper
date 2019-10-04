<template>
  <header class="nav-bar_container">
    <van-nav-bar :title="$route.meta.title" left-arrow fixed @click-left="onClickLeft">
      <van-icon class="back" name="arrow-left" slot="left" />
    </van-nav-bar>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar_container {
  height: 46px;
  .back {
    font-size: 26px;
  }
}
</style>