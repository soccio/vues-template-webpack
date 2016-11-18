import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Home from '../views/home.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '../views/hello.vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: Hello }
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  mode: 'hash',
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
