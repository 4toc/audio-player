<script setup lang="ts">

import {ref, computed, watch} from "vue";
import type {Ref} from 'vue'
import {useStore} from "vuex";

import {convertMsToMinutesSeconds} from "@/utils/readableTime";

const store = useStore()

const currentTrack = computed(() => store.getters.getCurrentTrack)
let currentTime = ref(0)
const player = ref<HTMLAudioElement>()
let isPlayed : Ref<boolean | undefined> = ref(false)
let seekValue = ref(0)

const volume = ref(50)

const readableCurrentTime = computed(() => {
  if (currentTime.value) {
    return convertMsToMinutesSeconds(currentTime.value * 1000)
  }
  return '00:00'
})

watch(currentTrack, (value) => {
  currentTime.value = 0
  seekValue.value = 0
  isPlayed.value = false
})

const clickPrevTrack = () => { store.dispatch('prevTrack') }
const clickNextTrack = () => { store.dispatch('nextTrack') }

const playPause = () => {
  isPlayed.value = player.value?.paused
  if (player.value?.paused) {
    player.value?.play()
  } else {
    player.value?.pause()
  }
}

const onPlaying = () => {
  if (player.value?.currentTime && player.value?.duration) {
    currentTime.value = player.value?.currentTime
    seekValue.value = (player.value?.currentTime / player.value?.duration) * 100
  }
}

const onSeek = () => {
  if (player.value?.duration) {
    const seekTo = player.value?.duration * (Number(seekValue.value) / 100);
    player.value.currentTime = seekTo
  }
}

const clickVolumeIcon = () => {
  volume.value = volume.value === 0 ? 50 : 0
  setVolume()
}

const setVolume = () => {
  if (typeof player.value?.volume === 'number') {
      player.value.volume = Number(volume.value) / 100
  }
}

const handleInputValue = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  volume.value = Number(target.value)
}

const handleSeekValue = (e: Event) => {
  const target = (<HTMLInputElement>e.target)
  seekValue.value = Number(target.value)
}
</script>

<template>
  <div class="audio-player" v-if="currentTrack">
    <div class="audio-player__track">
      <div class="audio-player__name">
        <div class="audio-player__title">{{ currentTrack.title }}</div>
        <div class="audio-player__space">-</div>
        <div class="audio-player__author">{{currentTrack.author}}</div>
      </div>
      <div class="audio-player__progress-line">
        <input
            type="range"
            min="0"
            max="100"
            step="1"
            :value="seekValue"
            @input="handleSeekValue"
            @change="onSeek"
        />
      </div>
      <div class="audio-player__time">
        <span>{{ readableCurrentTime }}</span>
        <span>{{ currentTrack.duration }}</span>
      </div>
      <div class="audio-player__buttons">
        <div class="audio-player__btn audio-player__btn--prev" @click="clickPrevTrack">
          <img src="@/assets/icons/next.svg" alt="">
        </div>
        <div @click="playPause" class="audio-player__btn">
          <img v-if="isPlayed" src="@/assets/icons/pause.svg" alt="">
          <img v-else src="@/assets/icons/play.svg" alt="">
        </div>
        <div class="audio-player__btn" @click="clickNextTrack">
          <img src="@/assets/icons/next.svg" alt="">
        </div>
      </div>
      <audio
          ref="player"
          :src="currentTrack.src"
          preload="metadata"
          @timeupdate="onPlaying"
      >
      </audio>
    </div>
    <div class="audio-player__volume">
      <div class="audio-player__volume-icon" @click="clickVolumeIcon">
        <img v-if="volume === 0" src="@/assets/icons/volume-off.svg" alt="">
        <img v-else src="@/assets/icons/volume-on.svg" alt="">
      </div>
      <div class="audio-player__volume-line">
        <input
            type="range"
            min="0"
            max="100"
            step="1"
            :value="volume"
            @input="handleInputValue"
            @change="setVolume"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/_media.scss";

.audio-player {
  background: #2A2A2A;
  margin-top: 56px;
  margin-bottom: 25px;
  border-radius: 16px;
  padding: 0 46px;
  display: flex;

  @include phone {
    flex-direction: column;
    padding: 0 26px;
  }

  &__track {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__name {
    display: flex;
    justify-content: center;
    font-size: 22px;
    margin: 26px 0;
  }

  &__space {
    margin: 0 6px;
  }

  &__progress-line {
    width: 100%;
    input {
      width: 100%;
    }
  }

  &__time {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #E3E3E3;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @include phone {
      margin-bottom: 0;
    }
  }

  &__btn {
    height: 18px;
    width: 18px;
    padding: 12px;

    &:hover {
      cursor: pointer;
    }

    &--prev {
      transform: rotate(180deg);
    }
  }

  &__volume {
    display: flex;
    align-items: center;
    padding-left: 40px;

    @include phone {
      justify-content: start;
      padding: 20px 0;
    }
  }

  &__volume-icon {
    width: 24px;
    height: 24px;
    margin-right: 18px;
    &:hover {
      cursor: pointer;
    }
  }

  &__volume-line {
    width: 100px;
  }
}
</style>
