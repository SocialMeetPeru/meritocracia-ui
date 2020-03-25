<template>
  <div>
    <div class="m-auto" style="max-width:400px">
      <!-- Card Login -->
      <div class="card mt-3">
        <div class="card-body">
          <h6 class="text-center mb-3">
            Contacta con Personas extraordinarias
          </h6>

          <!-- Errores -->
          <div v-if="errors.estado=='no'" class="alert alert-danger mt-3" role="alert">
            {{errors.message}}
          </div> <!-- End Errores -->

          <!-- Email -->
          <div class="m-auto w-75">
            <input type="email"
                    class="form-control mb-2"
                    v-model="login.email"
                    placeholder="email">
          </div>

          <!-- Password -->
          <div class="m-auto w-75">
            <input type="password"
                    v-model="login.password"
                    class="form-control mb-2"
                    placeholder="password">
          </div>

          <!-- Ingresar y Unirme -->
          <div class="m-auto w-75">
            <button @click="Login" class="btn btn-secondary btn-block mb-2" :disabled="isLoading">
              <i v-if="!isLoading" class="fa fa-user-alt"></i>
              <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

<!--                <i class="fa fa-user-alt" v-if="logged_in=='no'"></i>-->
<!--                <i class="fa fa-spinner fa-spin" v-if="logged_in=='cargando'"></i>-->
                Login
            </button>
          </div>
          <div class="m-auto w-75">
            <button class="btn btn-primary btn-block mb-2"
                    data-toggle="modal"
                    data-target="#exampleModal">
                Register
            </button>
          </div>

          <div class="dropdown-divider w-75 m-auto"></div>

          <!-- Abrir Con Redes Sociales -->
          <div class="w-75 m-auto pt-2">
            <button class="btn btn-outline-primary btn-block mb-2">
              Login with <i class="fab fa-facebook"></i>
            </button>
            <button class="btn btn-outline-success btn-block mb-2">
              Login with <i class="fab fa-twitter"></i>
            </button>
            <button class="btn btn-outline-info btn-block mb-2">
              Login with <i class="fab fa-linkedin-in"></i>
            </button>
            <button class="btn btn-outline-warning btn-block mb-2">
              Login with <i class="fab fa-google"></i>
            </button>
          </div>

          <div class="dropdown-divider w-75 m-auto"></div>

          <!-- Ingresar Anonimamente -->
          <div class="pt-2 w-75 m-auto">
            <router-link to="/anonymous" class="btn btn-danger btn-block">Login Anonymously</router-link>
          </div>

          <!-- Ingresar Ambassador -->
          <div class="pt-2 w-75 m-auto">
            <router-link to="/referred" class="btn btn-success btn-block">Refered by Ambassador</router-link>
          </div>
        </div><!-- end card-body -->
      </div><!-- end card -->


      <!-- Modal -->
      <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Como quieres unirte?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="pt-1 d-flex flex-sm-row flex-column align-items-center">
                <!-- Button Trueque -->
                <div class="w-50">
                  <div class="mr-sm-2 mb-2">
                    <button class="btn btn-primary btn-block btn-lg" @click="UnirteOpction('trueque')">
                      <i class="fa fa-user"></i> Trueque
                    </button>
                  </div>
                </div>
                <!-- Button Ambassador-->
                <div class="w-50">
                  <div class="mb-2">
                    <button class="btn btn-warning btn-block btn-lg" @click="UnirteOpction('ambassador')">
                      <i class="fa fa-users"></i> Ambassador
                    </button>
                  </div>
                </div>
              </div>
            </div><!-- End ModalBody -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div><!-- End Modal -->

    </div><!-- end col-10 -->
  </div>
</template>

<script>
  const axios = require('axios');
  import $ from 'jquery'
  export default {
    name: 'Login',
    data() {
      return {
        isLoading: false,
        errors: {
          estado: '',
          message: ''
        },
        logged_in: 'no',
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      Login() {
        this.logged_in = 'cargando';

        // Estado inicial de los errores
        this.errors.estado = '';
        this.errors.message = '';

        this.isLoading = true;

        setTimeout(() => {
        axios.post('http://34.229.211.102/src/auth/Auth.php?f=login', {login: this.login})
          .then(res => {


              // Si es correcto
              if (res.data.auth == 'ok') {
                console.log(res.data.token)
                const token = res.data.token;
                localStorage.setItem('access_token', token)
                this.$store.commit('retrieveToken', token);
                this.logged_in = 'yes';
                // this.$router.push('ranking');
              }

              // Si no es correcto
              else if (res.data.auth == 'no'){
                this.errors.estado = 'no';
                this.errors.message = res.data.error;
              }


            this.isLoading = false;



            // console.log(res.data)
          });
        }, 1500);
      },
      UnirteOpction(option) {
        if (option == 'trueque'){
          /* Cierra el Modal Unirte */
          $('#exampleModal').modal('hide');
          this.$router.push('regular');
        }else if (option == 'ambassador'){
          $('#exampleModal').modal('hide');
          this.$router.push('ambassador');
        }
      }
    },
    mounted() {
      // this.Login();
    }
  }

</script>
