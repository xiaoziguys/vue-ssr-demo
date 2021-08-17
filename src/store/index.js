import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      book
    }
  })
}
