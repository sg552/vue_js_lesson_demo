<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div>
      标题： {{ book.title }}  <br/>
      作者： {{ book.author}}  <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '图书详情页',
      book: {
          title: "毛泽东选集",
          author: "毛主席"
      }
    }
  }
}
</script>

<style scoped>
</style>
