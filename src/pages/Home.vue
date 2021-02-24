<template>
  <div>
    <loading v-if="statusLoading"/>
    <portada></portada>
    <articulos :elementos="allArticulos"></articulos>
    <contacto></contacto>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import Loading from '@/components/Loading'

import Portada from '@/containers/Portada'
import Articulos from '@/containers/Articulos'
import Contacto from '@/containers/Contacto'

export default {
  data() {
    return {

    }
  },
  created() {
    this.buscarArticulos()
  },
  methods: {
    ...mapActions(["buscarArticulos"]),
  },
  computed: {
    ...mapGetters(["allArticulos", "statusLoading"]),
  },
  components: {
    Portada,
    Articulos,
    Contacto,
    Loading
  }
}
</script>

<style lang="scss" scoped>

</style>