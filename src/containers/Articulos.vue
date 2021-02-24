<template>
  <main class="seccion-articulos">
    <heading texto="Nuestros artículos" />
    <section class="tabs">
      <article class="opciones">
        <ul class="acciones">
          <li
            v-for="(type, index) in types"
            :key="index"
            v-html="type"
            @click="selectCategory(type, index)"
            :class="{ isActive: index == isSelected }"
          ></li>
        </ul>
      </article>
      <article class="contenido">
        <div v-for="(elemento, index) in elementos" :key="index" class="elementos">
          <card :item="elemento" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";

import Heading from "@/components/Heading-Seccion";
import Card from "@/components/Card";
export default {
  data() {
    return {
      types: ["Todos", "Productos", "Recetas", "Consejos"],
      isSelected: 0,
    };
  },
  props: {
    elementos: {
      type: Array,
    },
  },
  methods: {
    ...mapActions(["buscarCategory"]),
    selectCategory(type, index) {
      this.isSelected = index;

      if (type == "Todos") {
        this.buscarCategory("");
      } else {
        this.buscarCategory(type);
      }
    },
  },
  components: {
    Heading,
    Card,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/base.scss";
@import "~@/styles/responsive.scss";

.seccion-articulos {
  .tabs {
    display: flex;
    width: 100%;
    margin-top: 6em;
    .opciones {
     
      margin-right: 10px;
      background-color: $sexto_color;
      border-radius: 10px;
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);

      .acciones {
        padding: 25px;
        li {
          font-family: $font-primaria;
          line-height: 23px;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          padding: 15px 0;
          &:hover {
            color: $tercer_color;
            font-weight: 700;
            &::before {
              content: "";
              background-image: url("~@/assets/images/arrow.png");
              background-position: center center;
              background-size: cover;
              background-repeat: no-repeat;
              height: 12px;
              width: 14px;
              position: absolute;
              right: 0;
              top: 22px;
            }
          }
        }
        .isActive {
          color: $tercer_color;
          font-weight: 700;
          &::before {
            content: "";
            background-image: url("~@/assets/images/arrow.png");
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 12px;
            width: 14px;
            position: absolute;
            right: 0;
            top: 22px;
          }
        }
      }
    }
    .contenido {
      display: grid;

      .elementos {
        margin-bottom: 40px;
      }
    }
  }
}
</style>