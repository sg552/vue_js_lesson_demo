<template>
  <div>
    <!-- 显示　this.my_value 这个变量 -->
    <p>页面上的值:  {{my_value}} </p>

    <p> 通过视图层，修改my_value: </p>
    <input v-model="my_value" style='width: 400px'/>

    <hr/>
    <input type='button' @click="change_my_value_by_code()" value='通过控制代码修改my_value'/>
    <hr/>
    <input type='button' @click="show_my_value()" value='显示代码中的my_value'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      my_value: '默认值',
    }
  },
  methods: {
    show_my_value: function(){
      alert('my_value: ' + this.my_value);
    },
    change_my_value_by_code: function(){
      this.my_value += ",  在代码中做修改, 666."
    }
  }
}
</script>

