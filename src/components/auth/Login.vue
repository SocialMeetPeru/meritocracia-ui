<template>
  <div>
    <div class="m-auto" style="max-width:400px">
      <!-- Card Login -->
      <div class="card mt-3">
        <div class="card-body">
          <h6 class="text-center mb-3">
            Contacta con Personas extraordinarias
          </h6>
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
            <button
                  @click="Login"
                  class="btn btn-secondary btn-block mb-2">
                <i class="fa fa-user-alt" v-if="logged_in=='no'"></i>
                <i class="fa fa-spinner fa-spin" v-if="logged_in=='cargando'"></i>
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
            <router-link to="/ambassador" class="btn btn-success btn-block">Refered by Ambassador</router-link>
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
              <div class="d-inline-flex pt-1" style="width: 100%">
                <!-- Button Trueque -->
                <div style="width: 50%; box-sizing: content-box;">
                  <div class="pr-1">
                    <button class="btn btn-primary btn-block btn-lg" @click="UnirteOpction('trueque')">
                      <i class="fa fa-user"></i> Trueque
                    </button>
                  </div>
                </div>
                <!-- Button Ambassador-->
                <div style="width: 50%; box-sizing: content-box;">
                  <div class="pl-1">
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
        axios.post('http://localhost:8082/src/Auth.php?f=login', {login: this.login})
          .then(res => {
            if (res.data.logged_in == 'si') {
              this.logged_in = 'yes';
              this.$router.push('Dashboard');
            }
            console.log(res.data.logged_in)
          });
      },
      UnirteOpction(option) {
        if (option == 'trueque'){
          /* Cierra el Modal Unirte */
          $('#exampleModal').modal('hide');
          this.$router.push('trueque_new');
        }else if (option == 'ambassador'){
          $('#exampleModal').modal('hide');
          this.$router.push('ambassador_uno');
        }
      }
    },
    mounted() {
      // this.Login();
    }
  }

</script>
