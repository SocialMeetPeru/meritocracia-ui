<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4">Ambassador Registro</h1>

    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">3. Ambassador Socio</h2>
            <p class="lead">
              Solo puedes recomendar a gente valiosa que conoces y te conocen bien,
              puedes perder puntos si es que nos haces una mala referencia y tu score
              como ambassador puede llegar a "Cero" cambiando tu condicion a usuario
              Regular.
            </p>
            <p class="card-text pl-5">
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
              <router-link to="/ambassador/refer-members" class="btn btn-lg btn-primary mr-2">Acepto</router-link>
            </p>
          </div>
        </div>
      </div>
    </div><!-- End Row -->

  </div>
</template>
