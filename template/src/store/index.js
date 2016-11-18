import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const Home = {
  state: {
    msg: 'hello world'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  modules: {
    Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
