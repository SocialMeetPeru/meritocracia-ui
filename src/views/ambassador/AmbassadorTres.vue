<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h3>Ambassador Registro</h3>

    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">3. Ambassador Socio</h4>
            <p>
              Solo puedes recomendar a gente valiosa que conoces y te conocen bien,
              puedes perder puntos si es que nos haces una mala referencia y tu score
              como ambassador puede llegar a "Cero" cambiando tu condicion a usuario
              Regular.
            </p>
            <p class="card-text pl-3">
              Estas son las reglas:
            </p>
            <ul>
              <li>Cada persona Extraordinaria equivale a 50 puntos</li>
              <li>Cada persona que no fue aprobada por nuestro equipo como
              estraordinaria le quitara 250 puntos al ambassador que lo recomendo</li>
              <li>Hay tareas adicionales que el ambassador podra hacer de manera
              voluntaria para recuperar sus puntos perdidos o ganar puntos
              adicionales.</li>
              <li>El ambassador tiene que conocer a la persona que refiere
              y esto tiene que unirse a nuestra red, recien en ese momento se le
              otorga los 50 puntos al ambassador.</li>
              <li>El ambassador que refirio primero es al que se le otorgan
              los 50 puntos, salvo que el referido seniale a otro ambassador</li>
            </ul>
            <p class="text-center pt-4">
              <button class="btn btn-primary mr-2" @click="Aplicar('si')" :disabled="disabled_in">
                <i v-if="disabled_in==false" class="fa fa-thumbs-up"></i>
                <span v-if="disabled_in==true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Acepto
              </button>
            </p>
          </div>
        </div>
      </div>
    </div><!-- End Row -->

  </div>
</template>

<script>
  export default {
    data(){
      return{
        disabled_in: false,
      }
    },
    methods: {
      Aplicar(opcion){
        this.disabled_in = true;

        setTimeout(() => {
          if ( opcion == 'si'){
            this.$router.push('ambassador_cuatro')
          }
        }, 1500);

      }
    }
  }
</script>
