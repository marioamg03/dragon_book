<template>
  <v-carousel :hide-delimiters="true" :show-arrows="false" :cycle="true" :interval="10000" height="100vh">
    <v-carousel-item
            src="/static/img/Slider 1.png"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
            src="/static/img/Slider 2.png"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
            src="/static/img/Slider 3.png"
            reverse-transition="fade-transition"
            transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/Slider 4.png"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/Slider 5.png"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
    <v-carousel-item
        src="/static/img/Slider 6.png"
        reverse-transition="fade-transition"
        transition="fade-transition">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Slider',
  mounted() {
    console.log('Component mounted.')
  }
}
</script>
