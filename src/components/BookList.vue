<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <table>
      <tr v-for="book in books">
        <td>{{book.title }}</td>
        <td>{{book.author }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: '图书列表页',
      books: [
        {
          title: "毛泽东选集",
          author: "毛主席"
        },
        {
          title: "周易",
          author: "古代人民"
        }
      ]
    }
  },
  created() {
    console.info("====")
    this.$http.get('api/interface/books/all').then((response) => {
       console.info(response.body)
    }, (response) => {
       console.error(response)
    });
  }

}
</script>

<style scoped>
</style>
