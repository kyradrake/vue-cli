<template>
  <div id="to-do-list">
    <ToDoHeader
	  v-bind:items="todos.length"
	></ToDoHeader>
    <input
	  v-model="newToDoItem"
	  v-on:keyup.enter="addNewToDoItem"
	  placeholder="Add a new To Do Item"
	>
    <ToDoItem 
	  v-for="(todo, index) in todos"
	  v-bind:key="todo.id"
	  v-bind:item="todo.item"
	  v-on:remove="todos.splice(index, 1)"
	></ToDoItem>
  </div>
</template>

<script>
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
	  newToDoItem: '',
	  nextToDoID: 3,
      todos: [
		{
		  id: 1,
		  item: 'Do Thing 1'
		},
		{
		  id: 2,
		  item: 'Do Thing 2'
		}
	  ]
    }
  },
  methods: {
    addNewToDoItem() {
	  this.todos.push({
	    id: this.nextToDoID,
		item: this.newToDoItem
	  })
	  this.nextToDoID++
	  this.newToDoItem = ''
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
