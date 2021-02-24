<template>
  <div class="card" @mouseover="hover = true"
    @mouseleave="hover = false">
    <picture>
      <img width="100%" :src="item.image" :alt="item.title" />
    </picture>
    <div class="desc">
      <h4 v-html="item.title" :style="hover ? 'color: #D8AD3D;' : 'color: #24272A;'"></h4>
      <p v-html="item.content"></p>
      <div class="more">
        <a v-if="hover" href="">Ver más</a>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title-Card";
import Description from "./Description-Card";
export default {
  data() {
    return {
      hover: false,
    }
  },
  props: {
    item: {
      type: [Array, Object],
    },
  },
  components: {
    Title,
    Description,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/base.scss";
@import "~@/styles/responsive.scss";
.card {
  border-radius: 10px;
  background-color: $sexto-color;
  margin-bottom: 20px;
  height: 100%;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.07));

  picture img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .desc {
    padding: 25px;

    h4, p {
     font-family: $font-primaria;
     color: $primer_color;
    }

    h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    .more {
      height: 20px;
      margin-top: 20px;
      a {
        font-size: 15px;
        font-weight: 700;
        text-transform: uppercase;
        font-family: $font-primaria;
        text-decoration: none;
        color: $tercer_color;
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>