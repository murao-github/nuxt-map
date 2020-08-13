<template>
  <div class="contents">
    <Navbar />
    <div class="body">
      <Sidebar />
      <div class="main">
        <div ref="googleMap" class="googleMap" />
      </div>
    </div>
  </div>
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
          lat: 35.68944,
          lng: 139.69167,
        },
        zoom: 17,
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
      this.google.maps.Map(this.$refs.googleMap, this.mapConfig)
    },
  },
}
</script>

<style scoped>
.contents {
  height: 100vh;
  width: 100vw;
}
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
