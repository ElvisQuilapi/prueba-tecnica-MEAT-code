<template>
  <main class="wrapper-contacto">
    <heading texto="Contáctanos" />
    <form class="contacto" @submit="checkForm">
      <article class="formulario">
        <div>
          <input-page
            labelInput="Nombre"
            v-model.trim="$v.form.firstname.$model"
            :validError="$v.form.firstname.$error"
          />
        </div>
        <div>
          <input-page
            labelInput="Apellido"
            v-model.trim="$v.form.lastname.$model"
            :validError="$v.form.lastname.$error"
          />
        </div>
        <div>
          <input-page
            labelInput="Email"
            v-model.trim="$v.form.email.$model"
            typeInput="email"
            :validError="$v.form.email.$error"
          />
        </div>
        <div>
          <input-page
            labelInput="Telefono"
            v-model.trim="$v.form.phone.$model"
            :validError="$v.form.phone.$error"
          />
        </div>
      </article>
      <div class="accion-boton">
        <button-page texto="Enviar" :disabled="$v.$invalid" />
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";

import InputPage from "@/components/Input";
import ButtonPage from "@/components/Button";
import Heading from "@/components/Heading-Seccion";

export default {
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    ...mapActions(["suscribirUsuario"]),
    checkForm(e) {
      this.suscribirUsuario(this.form);
      e.preventDefault();
    },
  },
  validations: {
    form: {
      firstname: {
        required,
      },
      lastname: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    },
  },
  components: {
    InputPage,
    ButtonPage,
    Heading,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/responsive.scss";

.form-error {
  background-color: red;
}

.wrapper-contacto {
  .contacto {
    .formulario {
      width: 100%;
      display: grid;
    }
    .accion-boton {
      padding: 25px 10px;
      float: right;
    }
  }
}
</style>