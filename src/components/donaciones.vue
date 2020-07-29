<template>
<v-content>
    <section class="bg_donaciones">

      <v-container>
        <v-row style="margin-top:130px; margin-bottom:20px;">
          <v-flex md4>
            <p style="font-weight: bold;" class="donaciones_title">Donaciones </p>
            <p style="font-weight: bold;" class="donaciones_title">Online</p>
            <p align="left" style="margin-top: 10px;" class="donaciones_text">
                Para realizar donaciones a diversas fundaciones a nivel mundial pulsa sobre cada una de ellas
                y ve a su enlace para que aporrtes tu gotita de amor con esas nobles causas</p>
          </v-flex>
          <v-flex md4 style="margin-top: 30px;">
              <v-img max-height="300px" contain style="float:right" src="../static/img/donaciones_img.png"/>
          </v-flex>
          <v-flex md4>
            <p style="font-weight: bold; font-size: 30px;" class="donaciones_title">Fundaciones</p>
            <p align="left" style="font-weight: normal; margin-top: 10px; margin-right: 30px;" class="donaciones_text">Insituciones sin fines de lucro a las que puedes aportar tu gotita de amor</p>
            <p style="margin-top: 10px;" class="donaciones_list">-Fundación niños con Cáncer Latinoamérica</p>
            <p class="donaciones_list">-Fundación Médicos por el Mundo</p>
            <p class="donaciones_list">-Fundación Niños con Discapacidad</p>
            <p class="donaciones_list">-Fundación Cáncer de Mama</p>
            <p class="donaciones_list">-Hospital Rural de la Comunidad Chilena</p>
          </v-flex>
        </v-row>
        <p align="left" style="font-weight: normal;" class="donaciones_text">Donaciones para diversas instituciones sn fines de lucro a las que puedes aportar tu gotita de amor</p>
        <p align="left" style="font-weight: normal;" class="donaciones_text">Hacemos esta labor de ayudar a los mas necesitados, colaboracon la institucion que desees</p>
      </v-container>
      <v-container
        style="background-color: #B12827;
        height: 10vh;
        width: auto;
        margin-top: 10px;
        max-width: 100%;">
      </v-container>
  </section>
</v-content>
</template>

<script>
export default {
}
</script>