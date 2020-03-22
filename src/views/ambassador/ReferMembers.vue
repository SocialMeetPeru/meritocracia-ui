<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4">Registro Ambassador</h1>

    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">4. Recomienda una persona</h2>
            <p class="lead">
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

            <button class="btn btn-primary btn-lg mt-4" @click="NextStep" :disabled="disabled_in">
              <i v-if="disabled_in==false" class="fa fa-share"></i>
              <i v-if="disabled_in == 'ok'" class="fa fa-check"></i>
              <span v-if="disabled_in==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Recomendar
            </button>



            <div class="alert alert-primary mt-3" role="alert" v-if="disabled_in=='ok'">
              Muchas Gracias Recuerda que tienes que entar seguro que esa persona te
              conoce, que se una a la red y que permanezca con ella hasta el momento que
              hagamos los conteos de tus puntos.

              <button class="btn btn-warning btn-lg mt-4 ml-3">
                <i class="fa fa-check-circle"></i> Seguir Recomendando</button>

              <button class="btn btn-success btn-lg mt-4 ml-3">
                <i class="fa fa-check-circle"></i> Ingresar a tu Cuenta</button>
            </div>

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
        setTimeout(() => {
          this.disabled_in = 'ok';
          // this.$router.push('trueque_register')
        }, 1500);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
