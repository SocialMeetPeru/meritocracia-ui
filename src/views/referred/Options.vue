<template>
  <!-- Ususario Anónimo -->
  <div class="container mb-4">
    
    <h3 class="display-5 pt-4">Referido por Ambassador</h3>

    <h6 class="display-6 mb-2">
      Muchas gracias, te enviaremos un email de confirmación. Por lo pronto puedes realizar
      las siguientes acciones.
    </h6>
    <!-- Anónimo option -->
    <div class="row w-75 m-auto pt-3">
      <div class="col-sm text-center mb-3">
        <button class="btn btn-primary w-100 h-100" @click="GoToPage('trueque')">
          Unirme
        </button>
      </div>
      <div class="col-sm text-center mb-3">
        <button class="btn btn-success w-100 h-100" @click="GoToPage('ambassador')">
          Ingresar Ambassador
        </button>
      </div>
      <div class="col-sm text-center mb-3">
        <button class="btn btn-danger w-100 h-100" @click="GoToPage('anonymous')">
          Ingresar Anonimamente
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      GoToPage(option) {
        switch (option) {
          case 'trueque':
            this.$router.push('/regular');
            break;
          case 'ambassador':
            this.$router.push('/ambassador');
            break;
          case 'anonymous':
            this.$router.push('/ranking');
            break;
          default:
            break;
        }
      }
    }
  }
</script>
