<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <button @click="getABook">获取一本书</button>
    {{book}}
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      id: 1
    }
  },
  computed: {
    book () {
      console.log(this.$store.state.book.items)
      return this.$store.state.book.items
    }
  },
  methods: {
    getABook () {
      this.$store.dispatch('fetchItem', { id: this.id++ })
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
