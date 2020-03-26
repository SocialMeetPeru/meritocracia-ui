<template>
  <div>
    <div class="row pt-5 pb-4 d-flex justify-content-center">
      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <h3 class="display-4 text-center">Como deseas registrarte?</h3>
            <p class="pt-5 text-center">

              <!-- Button Trueque-->
              <router-link to="/regular/bartering" class="btn btn-lg btn-primary">
                <i class="fa fa-user"></i> Trueque
              </router-link>

              <button class="btn btn-lg btn-primary ml-3"><i class="fa fa-user-friends"></i> Ambassador</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
