import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import BookList from '@/components/BookList'
import Book from '@/components/Book'
import SayHi from '@/components/SayHi'
import SayHiFromVariable from '@/components/SayHiFromVariable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },

    {
      path: '/say_hi_from_variable',
      name: 'SayHiFromVariable',
      component: SayHiFromVariable
    },
    {
      path: '/books',
      name: 'Books',
      component: BookList
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/book/new',
      name: 'NewBook',
      component: Book
    }
  ]
})
