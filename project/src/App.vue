<template>
  <div id="app">
    <HelloWorld/>
	<ToDoList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ToDoList from './components/ToDoList'

export default {
  name: 'App',
  components: {
    HelloWorld,
	  ToDoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
