<template>
  <scroll-wrapper class="home">
    <div v-for="(item, index) in '123123123'" :key="index">
      <router-link to="/about">layout</router-link>
    </div>
  </scroll-wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Home extends Vue {
  // created() {
  //   console.log('created')
  // }
}
</script>

<style lang="scss" scoped>
</style>
