<script setup lang="ts">
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore()

const searchResult = ref('')

const makeSearch = (e: Event) => {
  if (e && e.target) {
    const target = (<HTMLInputElement>e.target)
    searchResult.value = target.value
    store.commit('setSearch', target.value)
  }
}
</script>

<template>
  <div class="search-track">
    <input type="text" placeholder="Search for artist or track" @input="makeSearch">
  </div>
</template>

<style lang="scss">
.search-track {
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: #2A2A2A;
    border-radius: 16px;
    outline: none;
    border: 0;
    margin-bottom: 60px;
    text-indent: 30px;
    color: #FFFFDF;
    font-size: 18px;
    transition: background 0.2s;

    &:hover, &:focus {
      background: #A7A5A5;
    }
  }
}
</style>
