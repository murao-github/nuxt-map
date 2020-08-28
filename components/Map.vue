<template>
  <div ref="googleMap" id="googleMap" class="googleMap" />
</template>

<script>
export default {
  async mounted() {
    // GoogleMapApiの取得
    await this.$store.dispatch('googleMapApiInit')
    const googleApi = this.$store.getters.googleMapApi
    // Mapの初期化
    const map = new googleApi.maps.Map(
      this.$refs.googleMap,
      this.$store.getters.mapConf
    )
  },
}
</script>

<style scoped>
.googleMap {
  height: 100%;
  width: 100%;
}
</style>
