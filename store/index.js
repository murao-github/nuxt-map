import GoogleMapsApiLoader from 'google-maps-api-loader'

export const state = () => ({
  maps: null,
  googleMapApi: null,
  mapConf: {
    center: {
      lat: 34.666252,
      lng: 133.918104,
    },
    zoom: 13,
  },
})

export const mutations = {
  setMaps(state, argMaps) {
    state.maps = argMaps
  },
  setGoogleMapApi(state, argGoogleMapApi) {
    state.googleMapApi = argGoogleMapApi
  },
}

export const actions = {
  async googleMapApiInit({ commit }) {
    // 既にGoogleMapオブジェクトがstateに存在する場合は離脱
    if (this.getters.googleMapApi != null) {
      console.log('GoogleMapApi has all ready.')
      console.log(this.getters.googleMapApi)
      return
    }
    // GoogleMapApiを取得
    const googleApi = await GoogleMapsApiLoader({
      apiKey: process.env.API_KEY,
    })
    commit('setGoogleMapApi', googleApi)
  },
}

export const getters = {
  maps(state) {
    return state.maps
  },
  googleMapApi(state) {
    return state.googleMapApi
  },
  mapConf(state) {
    return state.mapConf
  },
}
