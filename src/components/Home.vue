<template>
  <v-content >
<!-- Seccion Slider INICO-->
    <section>
     <Slider style="z-index:1; position:relative;"></Slider>
     <v-flex md="12" style="margin-top:-100px; position:absolute; align-items: flex-end;">
        <v-img
          class="tile_div"
          src="../static/img/btn_suscripcion.png"
          max-width="250"/>
        <v-img
          class="tile_div"
          src="../static/img/btn_amazon.png"
          max-width="250"/>
         <v-img
            class="tile_div"
            src="../static/img/btn_donaciones.png"
            max-width="250"/>
      </v-flex>
    </section>
<!-- Secion Slider FINAL-->

<!-- Seccion Como Surgio INICIO-->
  <section class="bg_como_surgio">
      <v-container>
        <v-flex md12 style="calc(height:100vh + 80px)">
        <h1 class="title_style_black">- COMO SURGIÓ -</h1>
          <v-flex md6 style="text-align: justify">

            <p class="subtitle_text">Este libro es para ti, padre, madre, joven, maestro:</p>

            <p class="regular_text">Aprende a desaprender las creencias impuestas y enséñale a tus hijos, alumnos y amigos a
            conseguir una vida plena, donde el amor llene cada espacio. El cambio de conciencia es de vital
            importancia para el planeta.</p>

            <p class="regular_text">Este libro te brinda las enseñanzas de Ipad-ita, unas sencillas claves que al aplicarlas cada día,
            lograrán que la nueva humanidad, empezando por ti, tus hijos, tus nietos, tus alumnos, puedan
            disfrutar de un mundo más sano, lleno de amor, paz, empatía y así puedas sentir que realmente
            del cielo a la tierra hay un solo vuelo.<p>

            <p class="regular_text">El regalo de Ipad-ita para ti es gratis en formato digital. Pero te invitamos a donar una gotita de
            amor, por medio de la compra del libro por un precio muy económico, la compra del libro en físico, o bien, por medio de
            donación directa, de la cantidad que en tu corazón, estimes conveniente, para apoyar cualquiera de las organizaciones que
            te proponemos más abajo.<p>

            <p class="regular_text">El aporte que des en cualquiera de las formas, irá directo a la organización correspondiente y tú
            podrás comprobarlo, contactándote directamente con ellos.<p>

            <p class="regular_text">Mil gracias de corazón.</p>
          </v-flex>
        </v-flex>
      </v-container>
  </section>
<!-- Seccion Como Surgio FINAL-->

<!-- Seccion Lecciones De Amor INICIO-->
  <section class="bg_lecciones_de_amor">
      <div class="container_lecciones">
        <v-flex md12 style="vertical-align: middle;">
          <h1 class="title_style_black">- LECCIONES DE AMOR -</h1>

          <v-row style="margin-top: 50px">
            <v-flex md4 style="vertical-align: middle;">
              <v-img
                src="../static/img/icon_leccion_1.png"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
                style="margin-left: auto; margin-right: auto;"/>
              <h1 class="title_lecciones">El Mundo Invisible</h1>
              <p class="lecciones_text">Mi nombre es Mireya, soy muy curiosa, quiero aprender de todo. Cada día, un niño, un abuelo, un perrito, una maestra, un pájaro, mi Ipad-ita me enseñan algo nuevo…</p>
              <p class="lecciones_text_link">Leer Más <v-icon color="#982C2C">mdi-arrow-right</v-icon></p>

            </v-flex>
            <v-flex md4 style="vertical-align: middle;">
              <v-img
                src="../static/img/icon_leccion_2.png"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
                style="margin-left: auto; margin-right: auto;"/>
              <h1 class="title_lecciones">Las trampas del ego</h1>
              <p class="lecciones_text">Ego es un dragón travieso y engreído que vive dentro de nosotros, que nos habla todo el tiempo. Es aquella vocecita que siempre nos está cuestionando todo...</p>
              <p class="lecciones_text_link">Leer Más <v-icon color="#982C2C">mdi-arrow-right</v-icon></p>

            </v-flex>
            <v-flex md4 style="vertical-align: middle;">
              <v-img
                src="../static/img/icon_leccion_3.png"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
                style="margin-left: auto; margin-right: auto;"/>
              <h1 class="title_lecciones">Atraes lo que piensas</h1>
              <p class="lecciones_text">Para que todo funcione correctamente, tenemos que elevar nuestra vibración y aquí les presentaré las claves secretas, que fueron escondidas...</p>
              <p class="lecciones_text_link">Leer Más <v-icon color="#982C2C">mdi-arrow-right</v-icon></p>

            </v-flex>
          </v-row>
          <v-row style="margin-top: 50px">
            <v-flex md6 style="vertical-align: middle;">
              <v-img
                src="../static/img/icon_leccion_4.png"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
                style="margin-left: auto; margin-right: auto;"/>
              <h1 class="title_lecciones">Sentir para sanar</h1>
              <p class="lecciones_text">Al despertar me di cuenta que metafóricamente, esta leyenda contaba sobre DIOS o energía Universal y del Dragón Ego que tenemos en nuestro interior…</p>
              <p class="lecciones_text_link">Leer Más <v-icon color="#982C2C">mdi-arrow-right</v-icon></p>

            </v-flex>
            <v-flex md6 style="vertical-align: middle;">
              <v-img
                src="../static/img/icon_leccion_5.png"
                max-width="100"
                max-height="100"
                aspect-ratio="1"
                style="margin-left: auto; margin-right: auto;"/>
              <h1 class="title_lecciones">Todo es energía</h1>
              <p class="lecciones_text">Visualiza lo que quieres en forma muy detallada, visualízalo como ya conseguido y agradécelo anticipadamente, en algún momento tus deseos se materializarán...</p>
              <p class="lecciones_text_link">Leer Más <v-icon color="#982C2C">mdi-arrow-right</v-icon></p>

            </v-flex>
          </v-row>
        </v-flex>
      </div>
  </section>
<!-- Seccion Lecciones De Amor FINAL width-->

<!-- Seccion Del Cielo a la Tierra INICIO-->
  <section>
    <v-flex md12 xs12 sm12>
      <v-parallax src="/static/img/parallax.png" height="800"></v-parallax>
    </v-flex>
  </section>
<!-- Seccion Del Cielo a la Tierra FINAL-->

<!-- Seccion Compra libro Online INICIO-->
  <section>
      <v-container class="container_buy_title">
        <v-flex md12 style="height:10vh; width:100vw; padding: 0 0;">
         <h1 class="title_style_light">- COMPRA DEL LIBRO ONLINE -</h1>
        </v-flex>
      </v-container>
      <v-container>
        <v-row style="margin-top:50px; margin-bottom:50px;">
          <v-flex md4>
            <v-img max-height="400px" contain style="float:right" src="../static/img/book_sample.png"/>
          </v-flex>
          <v-flex md4 style="padding-right:50px;">
            <p align="left" style="font-weight: bold;" class="subtitle_text">IPAD-ITA Y EL DRAGÓN EGO</p>
            <p align="left" style="font-weight: bold;" class="subtitle_text_grey">Un cuento de realismo mágico en la era cuántica</p>
            <p align="left" class="regular_text">
              Adquiere el libro completo de Ipad-ita y el Dragón Ego.
              Entrarás en un mundo maravilloso y comprenderás 
              los grandes secretos ocultos por el Dragón Ego, y verás
              como cambia tu vida, así como cambió la nuestra.
            </p>
            <p align="left" class="regular_text">
              Adquiérelo en formato digital kindle a través de Amazon,
              con la compra del ejemplar estás donando a una de las
              fundaciones que apoyamos, regala junto a nosotros
              unas gotitas de amor que hacen milagros.
            </p>
          </v-flex>
          <v-flex md4>
            <p align="center" style="font-weight: bold;" class="subtitle_text">Compra Libro  Online IPAD-ITA Y EL DRAGÓN EGO</p>
            <p align="center" style="font-weight: bold;" class="subtitle_text_amazon">Formato Kindle</p>
            <p align="center" class="regular_text_amazon">Adquiere el libro completo de Ipad-ita y el Dragon Ego en:</p>
            <v-img max-height="180px" contain src="../static/img/amazon_logo.png"/>
            <v-btn color="#982C2C" dark large>Compra Online</v-btn>
          </v-flex>
        </v-row>
      </v-container>
  </section>
<!-- Seccion Compra libro Online FINAL-->

<!-- Seccion Suscripcion INICIO-->
  <section>
    <v-container class="container_suscripcion">
      <v-flex md12 style="height:10vh; width:100vw; padding: 0 0;">
        <h1 class="title_style_black">- SUSCRIPCIÓN -</h1>
      </v-flex>
    </v-container>
  </section>
  <section class="bg_suscripcion">
    <v-container style="">
      <v-row style="margin-top:50px; margin-bottom:50px;">
          <v-flex md6 style="padding-right:50px;">
            <p align="left" style="font-weight: bold;" class="subtitle_text">IPAD-ITA Y EL DRAGÓN EGO</p>
            <p align="left" style="font-weight: bold;" class="subtitle_text_grey">Un cuento de realismo mágico en la era cuántica</p>
            <p align="left" class="regular_text">
              Suscríbete y descarga completamente <spam style="color:#982C2C; font-weight: 900;">gratis</spam>
              el libro completo de Ipad-ita y el Dragon Ego.
            </p>
            <p align="left" class="regular_text">
              Tenemos pedidos del libro en físico para Latinoamérica y Europa,
              suscríbete y solicítalo a través de un correo al autor
              y coordinamos el envío del ejemplar.
            </p>
            <p align="left" class="regular_text">
              El libro se puede adquirir en español y en sueco.
            </p>
          </v-flex>
          <v-flex md6 style="padding-left:50px;">
            <p align="left" style="font-weight: bold;" class="subtitle_text">Suscríbete y descarga gratis</p>
            <p align="left" style="font-weight: bold;" class="subtitle_text">el libro Ipad-ita y El Dragón Ego</p>
            <p align="left" style="font-weight: bold;" class="subtitle_text_grey">Adquiere el libro de Ipadita y el Dragon Ego en formato PDF.</p>
          
            <v-form style="margin-top:25px;">
              <v-text-field color="#982C2C"  label="E-mail" required></v-text-field>
              <v-btn color="#982C2C" dark large>Suscríbete</v-btn>
            </v-form>
        
          </v-flex>
      </v-row>
    </v-container>
  </section>
<!-- Seccion Suscripcion FINAL-->

<!-- Seccion Autora INICIO-->
  <section class="bg_autora">
      <v-container>
      <v-row style="margin-top:50px; margin-bottom:50px;">
          <v-flex md4>
          </v-flex>
           <v-flex md4>
          </v-flex>
          <v-flex md4>
            <p align="left" class="title_style_light">Aída Foresti</p>
            <p align="left" class="subtitle_text_light">Autora</p>
            <p align="left" class="regular_text_light">
              Soy un ejemplo de recuperación tanto física como mental, 
              hace veintidós años recibí un diagnóstico de futura invalidez. 
              Entonces, con apoyo de mi esposo, cambié mi vida, mi forma 
              de alimentarme, mi forma de ver el mundo y descubrí que 
              el problema principal eran las emociones. 
              Decidí que mi misión era entregar al mundo mi experiencia.
            </p>

            <p align="left" class="title_style_light">Isis De Sousa</p>
            <p align="left" class="subtitle_text_light">Ilustradora</p>
            <p align="left" class="regular_text_light">
              Diseñadora e ilustradora venezolana. Egresada de 
              la Universidad Experimental del Yaracuy, año 2011. 
              Formadora de variadas actividades en diversos talleres 
              sobre Ilustración, creación de personajes y cuentos infantiles 
              dirigidos a niños y jóvenes. 
              Autora e ilustradora de  “la araña y mosca”, “Imagina” y otros 
              libros de diversos autores independientes y editoriales.
            </p>
          </v-flex>
      </v-row>
      </v-container>
  </section>
<!-- Seccion Autora FINAL-->

<!-- Seccion Contactos INICIO-->

  <section>
    <v-container class="container_suscripcion">
      <v-flex md12 style="height:10vh; width:100vw; padding: 0 0;">
        <h1 class="title_style_black">- CONTACTO -</h1>
      </v-flex>
    </v-container>
  </section>

  <section class="bg_contacto">
      <v-container>
        <v-row style="margin-top:80px; margin-bottom:50px;">
          <v-flex md4 style="vertical-align: middle;">
            <p align="left" style="font-weight: bold;" class="subtitle_text">Aída Foresti</p>
            <p align="left" class="regular_text">
              Radicada en Suecia hace 45 años, nacida en Chile.
              Autora del libro Ipad-ita y el dragón ego. 
              Actualmente escribiendo y desarrollando su trabajo
              inspirado en su experiencia, para lograr llevar 
              y difundir ese hermoso mensaje de vida.
            </p>
          </v-flex>
          <v-flex md4 style="padding-right:50px;">
          <p style="font-weight: bold;" class="subtitle_text">(llamadas internacionales)</p>
            <p style="font-weight: bold;" class="subtitle_text"><v-icon color="#982C2C">mdi-phone</v-icon>0046 70 765 50 78</p>
            <p style="font-weight: bold;" class="subtitle_text">(llamadas desde Suecia)</p>
            <p style="font-weight: bold;" class="subtitle_text"><v-icon color="#982C2C">mdi-phone</v-icon>070 765 50 78</p>
            <p style="font-weight: bold;" class="subtitle_text"><v-icon color="#982C2C">mdi-gmail</v-icon>aidaforesti@gmail.com</p>
            <v-flex style="margin-top:20px;">
              <p style="font-weight: bold;" class="subtitle_text"><v-icon color="#982C2C">mdi-facebook</v-icon><v-icon color="#982C2C">mdi-instagram</v-icon><v-icon color="#982C2C">mdi-twitter</v-icon></p>
            </v-flex>
          </v-flex>
          <v-flex md4>

            <p style="font-weight: bold;" class="subtitle_text">Comentarios</p>
          
            <v-form>

              <v-text-field color="#982C2C" label="Nombre y Apellido"required></v-text-field>
              <v-text-field color="#982C2C"  label="E-mail" required></v-text-field>
              <v-text-field color="#982C2C"  label="Mensaje"required></v-text-field>
              <v-btn color="#982C2C" dark large>Enviar</v-btn>
          
            </v-form>

          </v-flex>
        </v-row>
      </v-container>
  </section>
<!-- Seccion Contactos FINAL-->

  </v-content>
</template>

<script>
import Slider from './Slider.vue';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Slider
  }
}
</script>

<style>
  .tile_div {
      display: block;
      float: right;
      margin-right: 5px;
      text-align: center;
      line-height: 50px;
      text-decoration: none;
      z-index:1;
  }

  .title_style_black {
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    color: #982C2C;
  }
  .title_style_light {
    margin-top: 5vh;
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    color: #FFFFFF;
  }

  .subtitle_text {
    margin-top: 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    color: #982C2C;
  }

  .subtitle_text_light {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    color: #FFFFFF;
  }

  .subtitle_text_grey {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #726C66;
  }

  .subtitle_amazon {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #726C66;
  }

  .regular_text_amazon {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #726C66;
  }
  .regular_text {
    margin-top: 18px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #726C66;
  }

  .regular_text_light {
    margin-top: 18px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
  }

  .title_lecciones {
    margin-top: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    color: #726C66;
  }

  .lecciones_text {
    margin-top: 10px;
    margin-right:13%;
    margin-left:13%;
    margin-bottom:20px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 16px;
    color: #726C66;
  }

  .donaciones_title {
    text-align: left;
    font-family: 'Arial black';
    font-size: 50px;
    color: #B12827;
  }

  .donaciones_text {
    font-family: 'Roboto', sans-serif;
    text-align: justify;
    font-size: 14px;
    color:#726C66;
  }

.donaciones_list {
    margin-top: 5px;
    text-align: left;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    font-size: 20px;
    color:#4D5152;
}
  .bg_donaciones {
      width: 100%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/donaciones_fondo.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 90vh;
  }

  .lecciones_text_link {
    margin-top: 10px;
    margin-right:50px;
    margin-left:50px;
    margin-bottom:30px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 16px;
    color: #982C2C;
  }

  .container_lecciones {
    width: 100%;
    padding: 0 0%;
    display: table;
    margin: 0;
    max-width: 100%;
    background-size: cover;
    background-color: #EDEDE9;
    opacity:0.8;
    max-width: 100% !important;
  }

  .container_buy_title {
    width: 100%;
    padding: 0 0;
    display: table;
    margin: 0;
    max-width: 100%;
    background-color:#982C2C;
  }

  .container_suscripcion {
    width: 100%;
    padding: 0 0;
    display: table;
    margin: 0;
    max-width: 100%;
    background-color:#eab4b4;
  }

  .bg_como_surgio {
      width: 100%;
      padding: 0 7%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/background_como_surgio.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
  }
  .bg_lecciones_de_amor {
      width: 100%;
      padding: 0% 0%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/background_lecciones_de_amor.jpg');
      background-repeat: no-repeat;
      background-size: cover;
  }
  .bg_cielo_tierra {
      width: 100%;
      padding: 0 7%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/parallax.png');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
  }
  .bg_suscripcion {
      width: 100%;
      padding: 0 7%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/background_suscripcion.png');
      background-repeat: no-repeat;
      background-size: cover;
  }
  .bg_autora {
      width: 100%;
      padding: 0 7%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url( '/static/img/background_autoras.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
  }
  .bg_contacto {
      width: 100%;
      padding: 0 7%;
      display: table;
      margin: 0;
      max-width: 100%;
      background-image: url('/static/img/background_contacto.jpg');
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>