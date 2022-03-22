<script setup lang="ts">
import {defineProps} from "vue";
import {useStore} from "vuex";
import type {IMusicListItem} from "@/types/music-list-item";

const props = defineProps<{
  item: IMusicListItem
}>()

const store = useStore()

const clickSong = () => {
  store.commit('setCurrentTrackFromId', props.item.id)
}
</script>

<template>
  <div class="music-list-item" @click="clickSong">
    <div class="music-list-item__icon">
      <img src="@/assets/icons/play.svg" alt="">
    </div>
    <div class="music-list-item__name">
      <span class="music-list-item__title">{{props.item.title}}</span>
      <span class="music-list-item__author"> - {{ props.item.author }}</span>
    </div>
    <div class="music-list-item__duration">
      {{ props.item.duration }}
    </div>
  </div>
</template>

<style lang="scss">
.music-list-item {
  height: 76px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #2A2A2A;
  margin-bottom: 24px;
  border-radius: 22px;

  &:hover {
    cursor: pointer;
    background: #4F4E4E;
  }

  &__duration {
    margin-left: auto;
  }

  &__icon {
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }

  &__name {
    font-size: 18px;
  }

  &__author {
    color: #A7A5A5;
  }
}
</style>
