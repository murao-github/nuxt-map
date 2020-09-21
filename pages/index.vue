<template>
  <div class="body">
    <Sidebar />
    <div class="main">
      <Map />
    </div>
  </div>
</template>

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
</style>
