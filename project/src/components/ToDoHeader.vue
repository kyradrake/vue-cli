<template>
  <div class="to-do-header">
    <h3> {{ items }} To Do Items Remaining</h3>
  </div>
</template>

<script>
export default {
  name: 'ToDoHeader',
  props: ['items']
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
