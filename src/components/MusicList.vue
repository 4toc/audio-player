<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import {useStore} from "vuex"

import MusicListItem from '@/components/MusicListItem.vue'

export default defineComponent({
  components: {MusicListItem},
  setup() {
    const store = useStore()

    onMounted(async () => {
      await store.dispatch('fetchApi')
    })

    return {
      musicList: computed(() => store.getters.getMusicList),
    }
  }
})
</script>

<template>
  <div>
    <music-list-item v-for="item in musicList" :item="item" :key="item.id" />
  </div>
</template>
