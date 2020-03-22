<template>
  <div>
    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4">Trueque Registro</h1>

    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">2. Registro de Usuario </h2>
            <p class="card-text">
              Solo te falta un paso mas y tienes que llenar tus datos para poder completar el registro.
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
              <div class="col-6">
                <label>DNI / ID</label>
                <input type="text" class="form-control form-control-lg" placeholder="42516253">
              </div>
              <div class="col-3">
                <label>Pais</label>
                <select class="custom-select custom-select-lg">
                  <option selected>Select Pais</option>
                  <option value="1">Peru</option>
                  <option value="2">USA</option>
                  <option value="3">CHAINA</option>
                </select>
              </div>
              <div class="col-3">
                <label>Ciudad</label>
                <select class="custom-select custom-select-lg">
                  <option selected>Select Ciudad</option>
                  <option value="1">Peru</option>
                  <option value="2">USA</option>
                  <option value="3">CHAINA</option>
                </select>
              </div>
            </div>

            <div class="form-row pt-4">
              <div class="col-6 text-center">
                <label>Sexo : </label>
                <div class="pt-2">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                           value="option1" checked>
                    <label class="form-check-label" for="exampleRadios1">
                      Hombre
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                           value="option2" checked>
                    <label class="form-check-label" for="exampleRadios2">
                      Mujer
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                           value="option3" checked>
                    <label class="form-check-label" for="exampleRadios3">
                      Otro
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <label>Email</label>
                <input type="text" class="form-control form-control-lg" placeholder="tu_email@gmail.com">
              </div>
            </div>

            <div class="form-row pt-4">
              <div class="col-6">
                <label>Password:</label>
                <input type="password" class="form-control form-control-lg" placeholder="******">
              </div>
              <div class="col-6">
                <label>Re Password:</label>
                <input type="password" class="form-control form-control-lg" placeholder="******">
              </div>
            </div>

            <button class="btn btn-primary btn-lg mt-4" @click="NextStep" :disabled="disabled_in">
              <i v-if="disabled_in==false" class="fa fa-share-alt"></i>
              <span v-if="disabled_in==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        disabled_in: false,
      };
    },
    methods: {
      NextStep() {
        this.disabled_in = true;
        setTimeout(() => {
          this.$router.push('trueque_register')
        }, 1500);
      }
    }
  }
</script>
