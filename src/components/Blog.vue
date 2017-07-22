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

export default {
  data () {
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
  },
  components: {
    MyLogo
  }
}
</script>

<style>
</style>
