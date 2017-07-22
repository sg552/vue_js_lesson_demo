<template>
  <div >
    <my-logo title="博客详情页">
    </my-logo>
    <div>
      <p> 标题： {{ blog.title }}  </p>
      <p> 发布于： {{blog.created_at }}</p>
      <div v-html='blog.body'>
      </div>
    </div>
  </div>
</template>

<script>
import MyLogo from './Logo.vue'
import CommonHi from '@/mixins/common_hi.js'

export default {
  data: function() {
    return {
      blog: {}
    }
  },
  mounted() {
    this.$http.get('/api/interface/blogs/show?id='+this.$route.query.id).then((response) => {
       console.info(response.body)
       this.blog = response.body.result
    }, (response) => {
       console.error(response)
    });
    alert(this.hi("jim"))
  },
  components: {
    MyLogo
  },
  mixins: [
    CommonHi
  ]
}
</script>

<style>
</style>
