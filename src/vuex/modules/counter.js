import { COUNT_DOWN } from '@/vuex/mutation_types'

const state = {
  is_counting: false ,
  remaining_second: 10
}

const getters = {

  get_is_counting: state => {
    return state.is_counting
  },

  get_remaining_second: state => {
    return state.remaining_second
  }
}

const mutations = {
  [COUNT_DOWN](state, data){
    state.remaining_second = data
  }

}

export default {
  state,
  mutations,
  getters
}
