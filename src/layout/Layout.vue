<template>
  <main>
    <div v-for="(item, index) in '123123123'" :key="index">layout</div>
  </main>
</template>

<script>
export default {
  name: 'Layout',
  methods: {}
}
</script>

<style lang="scss" scoped>
div {
  height: 200px;
  border: 1px solid;
}
</style>