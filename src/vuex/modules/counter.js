import { INCREASE } from '@/vuex/mutation_types'

const state = {
  is_counting: false ,
  points: 10
}

const getters = {

  get_is_counting: state => {
    return state.is_counting
  },

  get_points: state => {
    return state.points
  }
}

const mutations = {
  [INCREASE](state, data){
    state.points += 1
  }

}

export default {
  state,
  mutations,
  getters
}
