<template>
  <div class="body">
    <div class="side">
      <div>
        <input v-model="text" type="text" placeholder="東京駅" />
        <button @click="geocodeSearch">search</button>
      </div>
    </div>
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
      geocoder: null,
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
      this.geocoder = new this.google.maps.Geocoder()
    },
    geocodeSearch(event) {
      const address = this.text
      // 検索文字列が空だった場合はreturn
      if (!address) {
        return
      }
      const map = this.map
      this.geocoder.geocode({ address }, function (results, status) {
        if (status === 'OK') {
          // スポットが見つかった場合は、地図の中央位置を変更し、ピンを立てる
          map.setCenter(results[0].geometry.location)
          const marker = new this.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          })
        } else {
          alert(
            'Geocode was not successful for the following reason: ' + status
          )
        }
      })
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
