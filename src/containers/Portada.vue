<template>
  <section class="wrapper">
    <div class="contenido">
      <div class="navegacion">
        <logo />
        <social />
      </div>
      <div class="descripcion">
        <h1 class="titulo">El secreto de tu cocina</h1>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "@/components/Logo";
import Social from "@/components/Social";

export default {
  data() {
    return {};
  },
  components: {
    Logo,
    Social,
  },
};
</script>

<style lang="scss">
@import "~@/styles/base.scss";
@import "~@/styles/responsive.scss";

.wrapper {
  background-image: url("~@/assets/images/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-image: url("~@/assets/images/gradiente.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 253px;
    bottom: 0;
  }

  .contenido {
    .navegacion {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }

    .descripcion {
      .titulo {
        margin: 0;
        padding: 0;
        font-family: $font_secundaria;
        font-weight: 700;
        width: 4.2em;
        position: relative;
        z-index: 1;
        &:after {
          content: "";
          left: -80px;
          z-index: -1;
          bottom: -35px;
          position: absolute;
          background-image: url("~@/assets/images/brush-title.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 100px;
        }
      }
    }
  }
}
</style>