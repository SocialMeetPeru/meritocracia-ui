<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4">Trueque Registro</h1>

    <!-- Wizard Form-->
<!--    <div class="list-group list-group-horizontal-lg pt-4">-->

<!--      <div class="list-group-item list-group-item-action list-group-item-primary">-->
<!--        <div class="d-flex w-100 justify-content-between">-->
<!--          <h5 class="mb-1">1. <i class="fa fa-share-alt"></i> Recomienda Alguien</h5>-->
<!--          <small>Siguiente <i class="fa fa-arrow-alt-circle-right"></i></small>-->
<!--        </div>-->
<!--        <p class="mb-1">Recomienda a alguien o a ti mismo para poder Continuar con el siguinte.</p>-->
<!--        <small>Paso 1</small>-->
<!--      </div>-->

<!--      <div class="list-group-item list-group-item-action list-group-item-light">-->
<!--        <div class="d-flex w-100 justify-content-between">-->
<!--          <h5 class="mb-1">2. <i class="fa fa-user-cog"></i> Registro de usuario.</h5>-->
<!--          <small>Siguiente <i class="fa fa-arrow-alt-circle-right"></i></small>-->
<!--        </div>-->
<!--        <p class="mb-1">Completa Tus datos, nombre , apellido, contrasenia y asegurate que sean correctos.</p>-->
<!--        <small>Paso 2</small>-->
<!--      </div>-->

<!--      <div class="list-group-item list-group-item-action list-group-item-light">-->
<!--        <div class="d-flex w-100 justify-content-between">-->
<!--          <h5 class="mb-1">3. Completado.</h5>-->
<!--          <small class="text-muted">Completado <i class="fa fa-arrow-alt-circle-down"></i></small>-->
<!--        </div>-->
<!--        <p class="mb-1">Has completado todo el registro de Usuario Regular exitosamente. Bievenido .!!</p>-->
<!--        <small class="text-muted">Paso 3</small>-->
<!--      </div>-->

<!--    </div>-->
    <!-- End Wizard Form-->

    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">1. Recomienda </h2>
            <p class="card-text">
              Para poder ingresar a nuestra red de contactos necesitamos que nos refieras a por lo menos
              1 persona extraordinaria que conoces, Si tu crees que reunes las condiciones podras
              referirte a ti mismo.
            </p>

            <!-- Formulario-->
            <div class="form-row pt-3">
              <div class="col">
                <label>Nombres</label>
                <input type="text" class="form-control form-control-lg" placeholder="Abraham Moises">
              </div>
              <div class="col">
                <label>Apellidos</label>
                <input type="text" class="form-control form-control-lg" placeholder="Linares Oscco">
              </div>
            </div>

            <div class="form-row pt-3">
              <div class="col">
                <label>Email</label>
                <input type="text" class="form-control form-control-lg" placeholder="elnaufrago2009@gmail.com">
              </div>
              <div class="col">
                <label>Telefono</label>
                <input type="text" class="form-control form-control-lg" placeholder="952631806">
              </div>
            </div>

            <div class="form-row pt-4">
              <div class="col">
                <label>Area de Expertis</label>
                <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
              </div>
            </div>

            <div class="form-row pt-4">
              <div class="col-8">
                <label>Link de Red Social del Referido:</label>
                <input type="text" class="form-control form-control-lg" placeholder="https://www.facebook.com/AbrahamMoisesLinares">
              </div>
            </div>

            <button class="btn btn-primary mt-4" @click="NextStep" :disabled="disabled_in">
              <i v-if="disabled_in==false" class="fa fa-share-alt"></i>
              <span v-if="disabled_in==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Recomendar
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        disabled_in: false,
        value: [
          { name: 'Javascript', code: 'js' }
        ],
        options: [
          { name: 'Vue.js', code: 'vu' },
          { name: 'FrontEnd', code: 'fron' },
          { name: 'BacnkEnd', code: 'back' },
          { name: 'FullStack', code: 'full' },
          { name: 'Javascript', code: 'js' },
          { name: 'Open Source', code: 'os' }
        ]
      };
    },
    methods: {
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag)
        this.value.push(tag)
      },
      NextStep(){
        this.disabled_in = true;
        setTimeout(() => { this.$router.push('trueque_register') }, 1500);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
