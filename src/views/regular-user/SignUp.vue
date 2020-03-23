<template>
  <div>
    <!-- Titulo Registro Usuario Normal -->
    <h3>Trueque Registro</h3>

    <!-- Formulario Recomienda -->
    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">2. Registro de Usuario </h4>
            <p class="card-text">
              Solo te falta un paso mas y tienes que llenar tus datos para poder completar el registro.
            </p>

            <!-- Formulario-->
            <div class="form-row pt-3 d-flex flex-column flex-sm-row">
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
              <div class="col-sm-6 mb-3">
                <label>DNI / ID</label>
                <input type="text" class="form-control" placeholder="42516253">
              </div>
              <div class="col-sm-3 mb-3">
                <label>Pais</label>
                <select class="custom-select">
                  <option selected>Select Country</option>
                  <option value="1">Peru</option>
                  <option value="2">USA</option>
                  <option value="3">China</option>
                </select>
              </div>
              <div class="col-sm-3 mb-3">
                <label>Ciudad</label>
                <select class="custom-select">
                  <option selected>Select City</option>
                  <option value="1">Peru</option>
                  <option value="2">USA</option>
                  <option value="3">China</option>
                </select>
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col-sm-6 mb-3">
                <label>Sexo</label>
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
              <div class="col-sm-6 mb-3">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="tu_email@gmail.com">
              </div>
            </div>

            <div class="form-row d-flex flex-column flex-sm-row">
              <div class="col-sm-6 ">
                <label>Password:</label>
                <input type="password" class="form-control" placeholder="******">
              </div>
              <div class="cols-sm-6">
                <label>Re Password:</label>
                <input type="password" class="form-control" placeholder="******">
              </div>
            </div>

            <button class="btn btn-primary mt-4" @click="NextStep" :disabled="disabled_in">
              <i v-if="disabled_in==false" class="fas fa-paper-plane"></i>
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
