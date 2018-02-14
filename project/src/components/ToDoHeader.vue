<template>
  <div class="to-do-header">
    <h3> {{ numberToDos }} To Do Items Remaining</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToDoHeader',
  computed: mapGetters([
    'numberToDos'
  ])
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
