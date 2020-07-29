<template>
  <v-carousel :hide-delimiters="true" :show-arrows="false" :cycle="true" :interval="5000">
    <v-carousel-item
            src="/static/img/SLIDER 1 RESPONSIVE.jpg"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
            src="/static/img/SLIDER 2 RESPONSIVE.jpg"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
            src="/static/img/SLIDER 3 RESPONSIVE.jpg"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/SLIDER 4 RESPONSIVE.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/SLIDER 5 RESPONSIVE.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/SLIDER 6 RESPONSIVE.jpg"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'SliderM',
  mounted(){
    console.log('Component mounted.')
  }
}
</script>
