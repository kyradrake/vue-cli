<template>
  <div class="to-do-item">
    <input type="checkbox" v-model="done">
    <li>{{ item }}</li>
    <button v-on:click="$emit('remove')">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    item: String
  },
  data () {
    return {
	    done: false
    }
  },
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
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
