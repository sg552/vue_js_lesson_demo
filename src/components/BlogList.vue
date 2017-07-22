<template>
  <div >
    <my-logo :title="title">
    </my-logo>
    <input type='button' @click='change_title' value='点击修改标题'/><br/>
    <table>
      <tr v-for="blog in blogs">
        <td>
          <router-link :to="{name: 'Blog', query: {id: blog.id}}">
            {{blog.id}}
          </router-link>
        </td>
        <td @click='show_blog(blog.id)'>{{blog.title }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import MyLogo from '@/components/Logo'

export default {
  data: function() {
    return {
      title: '博客列表页',
      blogs: [
      ]
    }
  },
  methods: {
    show_blog: function(blog_id) {
      console.info("blog_id:" + blog_id)
      this.$router.push({name: 'Blog', query: {id: blog_id}})
    },
    change_title: function(){
      this.title = '好多文章啊(标题被代码修改过了)'
    }
  },
  mounted() {
    this.$http.get('/api/interface/blogs/all').then((response) => {
       console.info(response.body)
       this.blogs = response.body.blogs
    }, (response) => {
       console.error(response)
    });
  },
  components: {
    MyLogo
  }

}
</script>

<style >
td {
  border-bottom: 1px solid grey;
}
</style>
