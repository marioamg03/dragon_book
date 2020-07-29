<template>

        <v-flex style="margin-top:120px" class="bg_lecciones_de_amor">
            <h2>Lecciones De Amor</h2>
            <LeccionesSlider style="margin-top:50px"></LeccionesSlider>
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
        </v-flex>
    
</template>

<script>
import LeccionesSlider from './LeccionesSlider.vue';

export default {
  components: {
    LeccionesSlider
  }
}

</script>