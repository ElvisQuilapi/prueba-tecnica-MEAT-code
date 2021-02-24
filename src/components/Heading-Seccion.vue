<template>
  <div class="titulo-seccion">
    <h2 v-html="texto"></h2>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: 'Undefined'
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~@/styles/base.scss";
@import "~@/styles/responsive.scss";

.titulo-seccion {
  margin-bottom: 4em;
  h2 {
    font-weight: 700;
    text-align: center;
    font-family: $font_secundaria;
    position: relative;
    z-index: 1;
    &:after {
      content: "";
      z-index: -1;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-image: url("~@/assets/images/brush-heading.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
    }
  }
}
</style>