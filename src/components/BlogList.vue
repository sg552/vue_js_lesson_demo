<template>
  <div >
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
    }
  },
  mounted() {
    this.$http.get('api/interface/blogs/all').then((response) => {
       console.info(response.body)
       this.blogs = response.body.blogs
    }, (response) => {
       console.error(response)
    });
  }

}
</script>

<style >
td {
  border-bottom: 1px solid grey;
}
</style>
