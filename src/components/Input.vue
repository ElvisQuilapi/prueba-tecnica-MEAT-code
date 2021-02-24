<template>
  <div class="input-base">
    <label :for="labelInput.toLowerCase()" v-html="labelInput"></label>
    <input
      :type="typeInput"
      :name="labelInput.toLowerCase()"
      :id="labelInput.toLowerCase()"
      autocomplete="off"
      @input="$emit('input', $event.target.value)"
      :class="{ 'error-input ': validError }"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelInput: {
      type: String,
      default: "Name",
    },
    typeInput: {
      type: String,
      default: "text",
    },
    validError: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/base.scss";

.input-base {
  margin: 10px 15px;
  label {
    text-transform: uppercase;
    line-height: 32px;
    font-size: 13px;
    font-weight: 700;
    font-family: $font-primaria;
  }
  input {
    display: block;
    background: $sexto_color;
    height: 50px;
    width: 100%;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
    outline: none;
    &:focus {
      transition: all ease 0.3s;
      border: 1px solid $tercer_color;
    }
  }
  .error-input {
    transition: all ease 0.3s;
    border: solid 1px red !important;
  }
}
</style>