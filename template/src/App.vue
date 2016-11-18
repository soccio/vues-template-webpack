<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <el-menu default-active="1" mode="horizontal">
      <router-link to="/">
        <el-menu-item index="1">Home</el-menu-item>
      </router-link>
      <router-link to="/hello">
        <el-menu-item index="2">Hello</el-menu-item>
      </router-link>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  created () {
    this.$Progress.start(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    setTimeout(() => {
      this.$Progress.finish(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }, 3000){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
