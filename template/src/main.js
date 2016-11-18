{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'babel-polyfill'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'whatwg-fetch'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as filters from './util/filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as plus from './util/plus'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueProgressBar from 'vue-progressbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Element from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'element-ui/lib/theme-default/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.config.silent = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

Vue.use(Element){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueProgressBar){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Object.keys(plus).forEach(key => {
  Vue.use(key, filters[key]()){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
