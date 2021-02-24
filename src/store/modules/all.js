import axios from 'axios'
import { URI_API } from '@/services/index'

const state = {
    articulos: [],
    loading: false,
    errors: []
}

const getters = {
    statusLoading: (state) => state.loading,
    allArticulos: (state) => state.articulos
}

const actions = {
    async buscarArticulos({ commit }) {
        commit('setLoading', true);
        try {
            const response = await axios.get(`${URI_API}api/articles`)
            const articulos = response.data

            commit('setArticulos', articulos)
            commit('setLoading', false)
        } catch (error) {
            console.log(error)
        }
    },
    async buscarCategory({ commit }, category) {
        commit('setLoading', true);
        try {
            const response = await axios.get(`${URI_API}api/articles?filter=${category}`)
            const articuloCategory = response.data
            commit('setArticulos', articuloCategory)
            commit('setLoading', false)

        } catch (error) {
            console.log(error)
        }
    },

    async suscribirUsuario({ commit }, data) {
        commit('setLoading', true);
        try {
            const response = await axios.post(`${URI_API}api/subscribe`, data)
            commit('setLoading', false)
        }
        catch (error) {
            console.log(error)
        }
    }
}

const mutations = {
    setLoading: (state, value) => (state.loading = value),
    setArticulos: (state, articulos) => (state.articulos = articulos)
}

export default {
    state,
    actions,
    mutations,
    getters
}

