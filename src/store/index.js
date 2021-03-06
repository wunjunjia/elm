import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global'
import shop from './modules/shop'
import home from './modules/home'
import { isDev } from '@/config'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: isDev,
  modules: {
    global,
    shop,
    home,
  },
})

export default store
