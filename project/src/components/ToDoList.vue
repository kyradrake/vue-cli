<template>
  <div id="to-do-list">
    <ToDoHeader></ToDoHeader>
    <input
	    v-model="newToDoItem"
	    v-on:keyup.enter="addNewItem"
	    placeholder="Add a new To Do Item"
	  >
    <ToDoItem
	    v-for="(todo, index) in todos"
	    v-bind:key="todo.id"
	    v-bind:item="todo.item"
	    v-on:remove="removeItem(index)"
	  ></ToDoItem>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ToDoHeader from './ToDoHeader'
import ToDoItem from './ToDoItem'

export default {
  name: 'ToDoList',
  components: {
	  ToDoHeader,
	  ToDoItem
  },
  data () {
    return {
	    newToDoItem: ''
    }
  },
  computed: mapState([
    'todos'
  ]),
  methods: {
    addNewItem() {
      this.$socket.emit('addItem', this.newToDoItem)
      this.newToDoItem = ''
    },
    removeItem(index) {
      this.$socket.emit('removeItem', index)
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
input[type=text] {
  margin-bottom: 10px 10px;
  padding-bottom: 10px 10px;
}
</style>
