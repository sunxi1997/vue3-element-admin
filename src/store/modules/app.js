const state = {
  sidebarOpened: false
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebarOpened = !state.sidebarOpened
  },
  CLOSE_SIDEBAR: state => {
    state.sidebarOpened = false
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
