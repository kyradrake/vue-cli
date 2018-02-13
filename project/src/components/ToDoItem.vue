<template>
  <div class="hello">
    <li>{{ item }} </li>
    <button>X</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['item']
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
