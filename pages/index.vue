<template>
  <v-layout row justify-center align-center>
    <GmapMap
      :center="{
        lat: 34.666252,
        lng: 133.918104,
      }"
      :zoom="13"
      map-type-id="roadmap"
      style="width: 100vw; height: 100vh;"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GmapMap>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        { position: { lng: 10.2, lat: 10 } },
        { position: { lng: 10.1, lat: 10 } },
      ],
    }
  },
}
</script>

<style scoped>
.map {
  height: 100vh;
  width: 100wh;
}
</style>
