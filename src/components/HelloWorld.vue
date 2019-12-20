<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{$store.state.fetchLoading.fetchLoadingNum}}</h2>
    <button @click="add">加</button>
    <button @click="del">减</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as api from '@/api/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    api.demo1({}).then((data) => {

    })
    // this.$store.dispatch('addLoadingNum')
    // console.log('11', this.$store.state.fetchLoading.fetchLoadingNum)
  },
  mounted () {
    // this.$store.dispatch('addLoadingNum')
    // console.log('11', this.$store.state.fetchLoading.fetchLoadingNum)
  },
  methods: {
    ...mapActions(['addLoadingNum', 'delLoadingNum']),
    add () {
      // this.$store.dispatch('addLoadingNum')
      this.addLoadingNum()
    },
    del () {
      this.delLoadingNum()
      // this.$store.dispatch('delLoadingNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
