<script setup lang="ts">
import MusicList from './MusicList.vue'
import AudioPlayer from './AudioPlayer.vue'
import SearchTrack from './SearchTrack.vue'
</script>

<template>
  <div class="main-page">
    <audio-player />
    <search-track />
    <music-list />
  </div>
</template>

<style>
.main-page {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding:  0 30px;
}
</style>
