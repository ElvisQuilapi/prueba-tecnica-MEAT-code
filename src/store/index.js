import Vue from 'vue'
import Vuex from 'vuex'
import all from './modules/all'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        all
    }
})