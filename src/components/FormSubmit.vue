<template>
  <div>
    <textarea v-model='content'>
    </textarea>
    <br/>
    <input type='button' @click='submit' value='留言'/>
  </div>
</template>
<script>

export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    submit: function(){
      this.$http.post('/api/interface/blogs/add_comment',
        {
          content: this.content
        }
      )
      .then((response) => {
          alert("提交成功!, 刚才提交的内容是：" + response.body.content)
        },
        (response) => {
          alert("出错了")
        }
      )


    }
  }
}
</script>
