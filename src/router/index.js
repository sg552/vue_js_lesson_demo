import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import BlogList from '@/components/BlogList'
import Blog from '@/components/Blog'

import SayHi from '@/components/SayHi'
import SayHiFromVariable from '@/components/SayHiFromVariable'

import TwoWayBinding from '@/components/TwoWayBinding'
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'

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
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },

    {
      path: '/two_way_binding',
      name: 'TwoWayBinding',
      component: TwoWayBinding
    },

    {
      path: '/form_input',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/form_submit',
      name: 'FormSubmit',
      component: FormSubmit
    }
  ]
} )
