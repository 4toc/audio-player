import { createStore } from 'vuex'
import exampleData from '@/utils/exampleData.json'
import type { IMusicListItem } from "@/types/music-list-item";

export interface State {
    musicList: Array<IMusicListItem>,
    currentTrack: IMusicListItem | undefined,
    currentTrackIndex: number,
    search: string
}

const store = createStore<State>({
    state: {
        musicList: [],
        currentTrack: undefined,
        currentTrackIndex: 0,
        search: ''
    },
    getters: {
        getCurrentTrack(state) {
            return state.currentTrack
        },
        getMusicList(state) {
            return state.musicList.filter(el => {
                if (el.title.toLowerCase().includes(state.search.toLowerCase()) ||
                    el.author.toLowerCase().includes(state.search.toLowerCase())) {
                    return true
                }
            })
        }
    },
    mutations: {
        setMusicList(state, data) {
            state.musicList = data
        },
        setCurrentTrackFromIndex(state, index) {
            state.currentTrackIndex = index
            state.currentTrack = state.musicList[index]
        },
        setCurrentTrackFromId(state, ID) {
            state.currentTrack = state.musicList.find((el, index) => {
                if (el.id === ID) {
                    state.currentTrackIndex = index
                    return true
                }
            })
        },
        setSearch(state, search) {
            state.search = search
        }
    },
    actions: {
        fetchApi(context) {
            context.commit('setMusicList', exampleData)
            context.commit('setCurrentTrackFromIndex', 0)
        },
        nextTrack(context) {
            const newIndex = context.state.musicList.length - 1 === context.state.currentTrackIndex
                ? 1
                : context.state.currentTrackIndex + 1
            context.commit('setCurrentTrackFromIndex', newIndex)
        },
        prevTrack(context) {
            const newIndex = context.state.currentTrackIndex === 0
                ? context.state.musicList.length - 1
                : context.state.currentTrackIndex - 1
            context.commit('setCurrentTrackFromIndex', newIndex)
        },
    }
})

export default store
