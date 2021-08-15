<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div></div>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  computed: {
    book () {
      return this.$store.state.book.items[this.$route.params.id || 1]
    }
  },
  serverPrefetch () {
    return this.fetchBookItem()
  },
  methods: {
    fetchBookItem () {
      // 这里要求 book 的 fetchItem 返回一个 Promise
      return this.$store.dispatch('book/fetchItem', this.$route.params.id || 1)
    }
  },
  components: {
    HelloWorld
  }
}
</script>
