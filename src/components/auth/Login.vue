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
                    v-model="user.email"
                    placeholder="email">
          </div>

          <!-- Password -->
          <div class="m-auto w-75">
            <input type="password"
                    v-model="user.password"
                    class="form-control mb-2"
                    placeholder="password">
          </div>

          <!-- Ingresar y Unirme -->
          <div class="m-auto w-75">
            <button
                  @click="login"
                  class="btn btn-secondary btn-block mb-2">
                <i class="fa fa-user-alt" v-if="!isLoading"></i>
                <i class="fa fa-spinner fa-spin" v-if="isLoading"></i>
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
                    <button class="btn btn-primary btn-block btn-lg" @click="join('trueque')">
                      <i class="fa fa-user"></i> Trueque
                    </button>
                  </div>
                </div>
                <!-- Button Ambassador-->
                <div style="width: 50%; box-sizing: content-box;">
                  <div class="pl-1">
                    <button class="btn btn-warning btn-block btn-lg" @click="join('ambassador')">
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
  import $ from 'jquery'
  import authService from '@/services/auth'

  export default {
    name: 'Login',
    data() {
      return {
        isLoading: false,
        user: {
          email: '',
          password: ''
        }
      }
    },
    created() {
      if (authService.isLoggedIn()) {
        this.$router.push('/');
      }
    },
    methods: {
      login() {
        this.isLoading = true;

        authService.login(this.user.email, this.user.password)
          .then(() => {
            this.isLoading = false;
            this.$router.push('/');
          }).catch(() => {
            this.isLoading = false;
            // TODO: display error
          })
      },
      join(option) {
        $('#exampleModal').modal('hide');

        if (option == 'trueque'){
          this.$router.push('/regular');
        } else if (option == 'ambassador'){
          this.$router.push('/ambassador');
        }
      }
    }
  }

</script>
