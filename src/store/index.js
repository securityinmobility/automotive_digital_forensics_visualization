import Vue from 'vue'
import Vuex from 'vuex'
import datatypes from './modules/datatypes'

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    datatypes
  }
})
