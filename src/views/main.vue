<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  name: 'main',
  el: '#app',
  date () {
    return {
      message: '我不是一个菜鸟'
    }
  }
}
</script>

<style>

</style>
