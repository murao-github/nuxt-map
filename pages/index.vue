<template>
  <div class="contents">
    <Navbar />
    <div class="body">
      <Sidebar />
      <div class="main">
        <Map />
      </div>
    </div>
  </div>
</template>

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
</style>
