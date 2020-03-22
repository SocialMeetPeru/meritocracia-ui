<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4">Ambassador Registro</h1>

    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">1. Ambassador Socio</h2>
            <p class="lead">
              Las extraordinarias personas de nuestra red de contactos nunca
              pagaran ninguna membrecia o algun costo por pertenecer a nuestra
              red, al contrario solo obtendran beneficios y tu tambien, si es
              que te conviertes en nuestro ambassador socio.
            </p>
            <p class="card-text pl-5">
              Mientras mas personas geniales nos recomiendes como "Ambassador"
              tus puntos valdran 5 veces mas que un usuario regular y 50 veces mas
              que un usuario anonimo, ademas de obtener el icono de usuario
              verificado <i class="fa fa-check-circle"></i>
            </p>
            <p class="text-center pt-4">
              <router-link to="/ambassador/signup" class="btn btn-lg btn-primary mr-2">Quiero Aplicar</router-link>
              <router-link to="/regular/signup" class="btn btn-lg btn-warning ml-2">
                <i class="fa fa-thumbs-down"></i> No estoy Interesado
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div><!-- End Row -->

  </div>
</template>
