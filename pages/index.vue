<template>
  <div class="body">
    <Sidebar />
    <div class="main">
      <div ref="googleMap" class="googleMap" />
    </div>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  data() {
    return {
      google: null,
      map: null,
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
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: process.env.API_KEY,
    })
    this.google = googleMapApi
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
      console.log('Init map')
    },
  },
}
</script>

<style scoped>
.body {
  display: flex;
  height: 94vh;
}
.side {
  width: 300px;
}
.main {
  flex: 1;
}
.googleMap {
  height: 100%;
  width: 100%;
}
</style>
