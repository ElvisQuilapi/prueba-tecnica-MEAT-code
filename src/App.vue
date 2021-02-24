<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">

@import '~@/styles/base.scss';

body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  font-family: $font_primaria;
}
</style>
