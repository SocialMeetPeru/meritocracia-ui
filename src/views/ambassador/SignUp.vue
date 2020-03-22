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

            <form @submit.prevent="submit">
              <!-- Formulario-->
              <div class="form-row pt-3">
                <div class="col">
                  <label>Nombres</label>
                  <input type="text" 
                    class="form-control form-control-lg" 
                    :class="{'is-invalid': $v.firstname.$error}"
                    v-model.trim="$v.firstname.$model" 
                    placeholder="Abraham Moises">
                  <div class="invalid-feedback" v-if="!$v.firstname.required">Este campo es obligatorio</div>
                </div>
                <div class="col">
                  <label>Apellidos</label>
                  <input type="text"
                    class="form-control form-control-lg"
                    :class="{'is-invalid': $v.lastname.$error}"
                    v-model.trim="$v.lastname.$model"
                    placeholder="Linares Oscco">
                  <div class="invalid-feedback" v-if="!$v.lastname.required">Este campo es obligatorio</div>
                </div>
              </div>

              <div class="form-row pt-3">
                <div class="col-6">
                  <label>DNI / ID</label>
                  <input type="text" 
                    class="form-control form-control-lg"
                    :class="{'is-invalid': $v.dni.$error}"
                    v-model.trim="$v.dni.$model"
                    placeholder="42516253">
                    <div class="invalid-feedback" v-if="!$v.dni.numeric">Debe ser números</div>
                </div>
                <div class="col-3">
                  <label>Pais</label>
                  <select class="custom-select custom-select-lg" v-model.trim="country">
                    <option value="" selected>Select Pais</option>
                    <option value="1">Peru</option>
                    <option value="2">USA</option>
                    <option value="3">CHAINA</option>
                  </select>
                </div>
                <div class="col-3">
                  <label>Ciudad</label>
                  <select class="custom-select custom-select-lg" v-model.trim="city">
                    <option value="" selected>Select Ciudad</option>
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
                            value="male" v-model="sex">
                      <label class="form-check-label" for="exampleRadios1">
                        Hombre
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                            value="female" v-model="sex">
                      <label class="form-check-label" for="exampleRadios2">
                        Mujer
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                            value="other" v-model="sex">
                      <label class="form-check-label" for="exampleRadios3">
                        Otro
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <label>Correo electrónico</label>
                  <input type="text" 
                    class="form-control form-control-lg"
                    :class="{'is-invalid': $v.email.$error}"
                    v-model.trim="$v.email.$model"
                    placeholder="tu_email@gmail.com">
                  <div class="invalid-feedback" v-if="!$v.email.required">Este campo es obligatorio</div>
                  <div class="invalid-feedback" v-if="!$v.email.email">Debe ser una correo electrónico válido</div>
                </div>
              </div>

              <div class="form-row pt-4">
                <div class="col-6">
                  <label>Password:</label>
                  <input type="password" 
                    class="form-control form-control-lg"
                    :class="{'is-invalid': $v.password.$error}"
                    v-model.trim="$v.password.$model"
                    placeholder="******">
                  <div class="invalid-feedback" v-if="!$v.password.required">Este campo es obligatorio</div>
                  <div class="invalid-feedback" v-if="!$v.password.minLength">Deber ser mínimo de 8 caracteres</div>
                </div>
                <div class="col-6">
                  <label>Re Password:</label>
                  <input type="password"
                    class="form-control form-control-lg"
                    :class="{'is-invalid': $v.repeatPassword.$error}"
                    v-model.trim="$v.repeatPassword.$model"
                    placeholder="******">
                  <div class="invalid-feedback" v-if="!$v.repeatPassword.sameAsPassword">La contraseña debe ser la misma</div>
                </div>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="conditions" v-model="termsAndConditions">
                  <label class="form-check-label" for="conditions">
                    Acepto los términos y condiciones
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg mt-4" :disabled="$v.$invalid || !termsAndConditions">
                <i v-if="!isLoading" class="fa fa-share-alt"></i>
                <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Registrarse
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, numeric, sameAs, minLength } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2'
import usersService from '@/services/users';

  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        dni: '',
        sex: 'male',
        country: '',
        city: '',
        password: '',
        repeatPassword: '',
        termsAndConditions: false,
        isLoading: false,
      };
    },
    validations: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      dni: {
        numeric
      },
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      submit() {
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        this.isLoading = true
        const data = {
          role: 'ambassador',
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          dni: this.dni,
          sex: this.sex,
          country: this.country,
          city: this.city,
          password: this.password,
        }

        usersService.post(data)
          .then(() => {
            this.isLoading = false
            this.$router.push('/ambassador/rules')
          })
          .catch(() => {
            this.isLoading = false
            Swal.fire({
              title: 'Error!',
              text: '¡Algo salió mal!. Por favor intente de nuevo',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          })
      }
    }
  }
</script>

