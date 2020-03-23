<template>
  <div>

    <!-- Referido por Ambassador -->

    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-sm-9">
        <div class="card">
          <div class="card-body">
            <h4>Referido por Ambassador</h4>
            <h6 class="mb-3">
              Hola, si fuiste referido por un <b>Ambassador</b>, completa tu datos.
            </h6>

            <!-- Formulario-->
            <div class="form-row d-flex flex-column flex-sm-row mt-2">
              <div class="col mb-3">
                <label>Nombres</label>
                <input type="text" class="form-control" placeholder="Abraham Moises">
              </div>
              <div class="col mb-3">
                <label>Apellidos</label>
                <input type="text" class="form-control" placeholder="Linares Oscco">
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col mb-3">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="elnaufrago2009@gmail.com">
              </div>
              <div class="col mb-3">
                <label>Telefono</label>
                <input type="text" class="form-control" placeholder="952631806">
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col mb-3">
                <label>Area de Expertis</label>
                <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col-sm-8">
                <label>Link de Red Social</label>
                <input type="text" class="form-control" placeholder="https://www.facebook.com/AbrahamMoisesLinares">
              </div>
            </div>

            <button class="btn btn-primary mt-4" @click="NextStep" :disabled="disabled_in">
              <span v-if="disabled_in==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Enviar
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
        setTimeout(() => {
          this.disabled_in = 'ok';
          this.$router.push('referred/options')
        }, 1500);
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>