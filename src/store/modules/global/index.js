import {
  UPDATE_LOCATION,
  UPDATE_TRANSITION,
} from './mutation-types'

const mutations = {
  [UPDATE_LOCATION]({ location }, payload) {
    for (const key in payload) {
      if (location.hasOwnProperty(key)) {
        location[key] = payload[key]
      }
    }
  },
  [UPDATE_TRANSITION](state, payload) {
    state.transition = payload
  },
}

export default {
  namespaced: true,
  state: () => ({
    location: {
      initial: false,
      city: '',
      longitude: '',
      latitude: '',
      address: '',
      adcode: '',
    },
    transition: '',
  }),
  mutations,
}
