<template>
  <div ref="googleMap" class="googleMap" />
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: 'Map',
  data() {
    return {
      google: null,
      mapConfig: {
        center: {
          lat: 34.666252,
          lng: 133.918104,
        },
        zoom: 13,
      },
    }
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: process.env.API_KEY,
    })
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      const map = new this.google.maps.Map(this.$refs.googleMap, this.mapConfig)
      console.log(map)
    },
  },
}
</script>

<style scoped>
.googleMap {
  height: 100%;
  width: 100%;
}
</style>
