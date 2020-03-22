<template>
  <!-- Ususario Anónimo -->
  <div class="container mb-4">
    
    <h3 class="display-5 pt-4">Bienvenido a nuestra comunidad</h3>
    <h6 class="display-6">
      Solo podrás votar y tu voto anónimo vale 1/10 de lo que valdría si te unes a nuestra red.
      <ul class="pt-2 pb-2">
        <li>
          No podrás ver ningún otro dato de las personas estraordinarias de nuestra red.
          Solo a los miembros regulares y los que están en votación.
        </li>
        <li>
          Tampoco podrás acumular puntos, ni convertirte en Ambassador Socio, perdiendo la opción de ganar 
          muchos beneficios de nuestros auspiciadores y que tu voto valga 50 veces más de lo que valdría como usuario 
          anónimo.
        </li>
      </ul>
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
            this.$router.push('/regular/v');
            break;
          case 'ambassador':
            this.$router.push('ambassador_new');
            break;
          case 'anonymous':
            this.$router.push('regular-signup');
            break;
          default:
            break;
        }
      }
    }
  }
</script>
