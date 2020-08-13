<template>
  <div class="contents">
    <Navbar />
    <div class="body">
      <Sidebar />
      <div class="main">
        <GmapMap
          ref="map"
          :center="map.center"
          :zoom="map.zoom"
          map-type-id="roadmap"
          class="googleMap"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: {
        center: {
          lat: 34.666252,
          lng: 133.918104,
        },
        zoom: 13,
      },
      markers: [
        {
          position: {
            lat: 34.666252,
            lng: 133.918104,
          },
        },
        {
          position: {
            lat: 34.666252,
            lng: 133.818104,
          },
        },
      ],
    }
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
