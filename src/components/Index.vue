<template>
  <div>
    <p>例子列表</p>
    <ul>
      <li><router-link :to="{name: 'Hello'}">
          Hello
        </router-link>:  显示最基本的Vuejs</li>
      <li><router-link :to="{name: 'SayHi'}">
          SayHi
        </router-link>:  第一个Vue页面</li>
      <li><router-link :to="{name: 'SayHiFromVariable'}">
          SayHiFromVariable
        </router-link>: 在页面中使用参数</li>
      <li><router-link :to="{name: 'BlogList'}">
          BlogList
        </router-link>: 调用真实接口, 并渲染出博客列表</li>
      <li><router-link :to="{name: 'Blog', query: {id: 1000}}">
          Blog
        </router-link>: 调用真实接口,显示blog文章</li>
      <li><router-link :to="{name: 'TwoWayBinding'}">
          TwoWayBinding
        </router-link>: 一个双向绑定的例子.</li>
      <li><router-link :to="{name: 'FormInput'}">
          FormInput
        </router-link>: 表单输入项大全.</li>
      <li><router-link :to="{name: 'FormSubmit'}">
          FormSubmit
        </router-link>: 提交表单的例子.</li>
      <li> 组件的使用,见:
        <router-link :to="{name: 'BlogList'}">
          BlogList
        </router-link> 和
        <router-link :to="{name: 'Blog', query: {id: 1000}}">
          Blog
        </router-link>
      </li>
      <li><router-link :to="{name: 'SayHiFromMixin'}">
          SayHiFromMixin
        </router-link>: Mixin的例子.</li>
      <li>Vuex的例子: <router-link :to="{name: 'ShowCounter1'}">
          倒计时页面1
        </router-link></li>
      <li><router-link :to="{name: 'ShowCounter2'}">
          倒计时页面2
        </router-link></li>

    </ul>
    <p>文字版教程在: <a href=https://github.com/sg552/happy_book_vuejs>https://github.com/sg552/happy_book_vuejs</a></p>
  </div>
</template>
