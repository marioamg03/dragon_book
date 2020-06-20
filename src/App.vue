<template>
  <div id="app">
    <!-- INICIO DEL MENU    -->
        <v-app-bar :fixed="true"  height="80">
          <img src="./assets/logo_web.png" alt="Vuetify.js" height="50">
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>INICIO</v-btn>
            <v-btn text>COMO SURGIO</v-btn>
            <v-btn text>LECCIONES DE AMOR</v-btn>
            <v-btn text>LIBRO ON LINE</v-btn>
            <v-btn text>BIOGRAFIA</v-btn>
            <v-btn text>CONTACTOS</v-btn>
            <v-btn text>DONACIONES</v-btn>
            <v-btn icon><v-icon>mdi-cart</v-icon></v-btn>
          </v-toolbar-items>
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
</style>
