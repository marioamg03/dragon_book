<template>
  <div id="app">
    <!-- INICIO DEL MENU    -->
        <v-app-bar :fixed="false" height="80">
          <img src="./assets/logo_web.png" alt="Vuetify.js" height="45" class="img-size">
          <v-spacer></v-spacer>
          <div class="deskContent">
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn text to="/">INICIO</v-btn>
              <v-btn text>COMO SURGIÓ</v-btn>
              <v-btn text to ="LeccionesDeAmor">LECCIONES DE AMOR</v-btn>
              <v-btn text>LIBRO ON LINE</v-btn>
              <v-btn text>BIOGRAFIA</v-btn>
              <v-btn text>CONTACTOS</v-btn>
              <v-btn text to="Donaciones">DONACIONES</v-btn>
            </v-toolbar-items>
          </div>
        </v-app-bar>
    <!-- INICIO DEL MENU    -->
    <!-- ROUTER VIEW -->

    <router-view/>
    <!-- ROUTER VIEW -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media all and (min-width: 480px) {
    .deskContent {display:block;}
    .img-size {height:50;}
    .phoneContent {display:none;}
}

@media all and (max-width: 479px) {
    .deskContent {display:none;}
    .img-size {height:30;}
    .phoneContent {display:block;}
}

</style>
