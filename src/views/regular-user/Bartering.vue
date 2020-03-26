<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->


    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-sm-8">
        <div class="card bg-light">
          <div class="card-body">
            <h4 class="card-title display-4">Recomienda Alguien</h4>
            <p class="card-text">
              Para poder ingresar a nuestra red de contactos necesitamos que nos refieras a por lo menos
              1 persona extraordinaria que conoces, Si tu crees que reunes las condiciones podras
              referirte a ti mismo.
            </p>

            <!-- Formulario-->
            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col mb-3">
                <label>Nombres</label>
                <input type="text" class="form-control form-control-lg" v-model="recomendado.names" placeholder="Abraham Moises">
              </div>
              <div class="col mb-3">
                <label>Apellidos</label>
                <input type="text" class="form-control form-control-lg" v-model="recomendado.last_name" placeholder="Linares Oscco">
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col mb-3">
                <label>Email</label>
                <input type="text" class="form-control form-control-lg" v-model="recomendado.email" placeholder="elnaufrago2009@gmail.com">
              </div>
              <div class="col mb-3">
                <label>Telefono</label>
                <input type="text" class="form-control form-control-lg" v-model="recomendado.telefono" placeholder="952631806">
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col mb-3">
                <label>Area de Expertis</label>
                <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col">
                <label>Link de Red Social del Referido:</label>
                <input type="text" class="form-control form-control-lg" v-model="recomendado.link" placeholder="https://www.facebook.com/AbrahamMoisesLinares">
              </div>
            </div>

            <button class="btn btn-primary btn-lg mt-4" @click="NextStep" :disabled="disabled_in">
              <i v-if="disabled_in==false" class="fa fa-user-friends"></i>
              <i v-if="disabled_in == 'ok'" class="fa fa-check"></i>
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
  import axios from 'axios'
  import Multiselect from 'vue-multiselect'
  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        disabled_in: false,
        recomendado: {
          names: 'Abraham Moises',
          last_name: 'Linares Oscco',
          email: 'elnaufrago2009@gmail.com',
          telefono: '952631806',
          link: 'https://www.facebook.com/AbrahamMoisesLinares'
        },
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

          axios.post('http://34.229.211.102/src/regular/recomendado.php').then(res => {
            console.log(res.data)
          })
          console.log(this.recomendado)
          // this.$router.push('regular/signup')
        }, 1500);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
