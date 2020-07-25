<template>
<v-app>
    <v-carousel :hide-delimiters="true" :show-arrows="true" :cycle="true" :interval="10000" height="80vh"> 
      <v-carousel-item>
        <v-flex style= "text-align: justify">
              <p style= "text-align: center"> Ipadita y el Dragón Ego</p>
              <p class="regular_text" style= "margin-left:10vw; aling: center; width:80vw">Mi nombre es Mireya, soy muy crioisa, quiero aprender de todo. Cada día, un niño, un abuelo, un perrito, 
                una maestra,un pájaro, mi Ipadita, me quieren enseñar algo nuevo.Pero precisamente ahora, mi interés 
                está enfocado en lo invisible, en aquello que no se ve. Para mi,eso es magia, otros lo denominan milagro, 
                pero en definitiva, cosas maravillosas que suceden en el mundo.</p>

              <p class="regular_text" style= "margin-left:10vw; width:80vw">Ustedes se preguntarán quién es Ipadita. Ella es mi última inverión del 2019. Yo suelo tener mucha 
                imaginacion y para mmi ella es mi amiga, por lo tanto la veo igual que a mis otras amigas. Ella es coqueta, 
                bonita y muy moderna. Le gustan los Ipad varones, loa Iphone y las conversaciones en twitter, facebook, 
                intagram y whatsapp. Es una chica que goza de la vida y los viajes. Me acompaña a todas partes, ella 
                alegra mis días. Seguramente quieren saber de dónde salió Ipadita. Y ella se ríe, se sonroja y cuenta:
                -Yo vengo del mundo invisible. aquel de nadie ve.</p>
        </v-flex>
      </v-carousel-item>
      <v-carousel-item>
        <v-flex style= "text-align: justify">
              <p style= "text-align: center"> Segunda parte</p>
        </v-flex>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: 'LeccionesSlider'
}
</script>
