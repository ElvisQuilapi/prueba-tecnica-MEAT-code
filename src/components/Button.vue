<template>
  <button v-html="texto" type="submit"></button>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: "Undefined",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/base.scss";

button {
  border-radius: 50px;
  width: 170px;
  height: 55px;
  background-color: $tercer_color;
  color: $sexto_color;
  border: none;
  outline: none;
  font-size: 15px;
  line-height: 26px;
  text-transform: uppercase;
  font-weight: 700;
  transition: ease all .5s;
  &:hover{
      background-color: $cuarto_color;
      cursor: pointer;
  }
  &:disabled{
      background-color: #CFCFCF;
      cursor: not-allowed;
  }
}
</style>