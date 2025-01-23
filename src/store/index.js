import { createStore } from 'vuex'

export default createStore({
  state: {
    isEntered: false
  },
  mutations: {
    setEntered(state, value) {
      state.isEntered = value
    }
  }
})
