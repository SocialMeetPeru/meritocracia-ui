<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h3>Ambassador Registro</h3>

    <div class="row pt-4 pb-4 d-flex justify-content-center">
      <div class="col-md-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">1. Ambassador Socio</h4>
            <p>
              Las extraordinarias personas de nuestra red de contactos nunca
              pagaran ninguna membrecia o algun costo por pertenecer a nuestra
              red, al contrario solo obtendran beneficios y tu tambien, si es
              que te conviertes en nuestro ambassador socio.
            </p>
            <p class="card-text pl-3">
              Mientras mas personas geniales nos recomiendes como "Ambassador"
              tus puntos valdran 5 veces mas que un usuario regular y 50 veces mas
              que un usuario anonimo, ademas de obtener el icono de usuario
              verificado <i class="fa fa-check-circle"></i>
            </p>
            <div class="d-flex justify-content-sm-between justify-content-center flex-wrap pt-4">
              <router-link to="/ambassador/signup" class="btn btn-primary mr-2 mb-2">Quiero Aplicar</router-link>
              <router-link to="/regular/signup" class="btn btn-warning mb-2">
                <i class="fa fa-thumbs-down"></i> No estoy Interesado
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div><!-- End Row -->

  </div>
</template>
