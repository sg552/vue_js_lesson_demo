<template>
  <div>
    <h1> 这个页面是 1号页面 </h1>
    {{remaining_second}} <br/>
    <input type='button' @click='increase' value='点击增加1'/><br/>
    <router-link :to="{name: 'ShowCounter2'}">
          倒计时页面2
    </router-link>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { COUNT_DOWN } from '@/vuex/mutation_types'
export default {
  computed: {
    remaining_second() {
      return store.getters.get_remaining_second
    }
  },
  store,
  mounted() {
  },
  methods: {
    increase() {
      store.commit(COUNT_DOWN, store.getters.get_remaining_second + 1)
    }
  }
}
</script>
