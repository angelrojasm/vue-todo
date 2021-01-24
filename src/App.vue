<template>
  <div id="app">
      <div id="header">
        <div id="header-content">
          <h2>Vue TODO</h2>
          <img id="logo" src="./assets/logo.png" alt="Vue logo"/>
        </div>
      </div>
      <div id="main">
        <div className="title">
          <h2>TODO APP</h2>
        </div>
        <div id="task-input-bar">
          <div className="task-input">
              <input
                type="text"
                name="task-input"
                id="task"
                placeholder="What do you plan to do?"
                v-model="inputText"
              />
              <button @click.prevent="addTodo" id="task-button">
                ADD
              </button>
            </div>
        </div>
        <TaskList :taskArr="taskArr" :deleteItem="deleteItem" />
      </div>
    </div>
</template>

<script>

import TaskList from './components/TaskList'

export default {
  name: 'App',
  components: {
    TaskList
  },
  data() {
    return {
    taskArr: ['hola'],
    inputText: '',
     
  }
},
methods: {
    deleteItem(text) {
  let newArr = this.taskArr.filter( element => element !== text)
  this.taskArr = newArr
  },

    addTodo() {
    this.taskArr.unshift(this.inputText)
	this.inputText = ''
  }
  },
}
</script>

<style>
html {
  background: linear-gradient(to bottom right, #42b883, #35495e) fixed;
  margin: 0%;
  padding: 0%;
}

input {
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	height: 80%;
	width: 70%;
	border: 1px solid darkgray;
	margin-top: 3px 0 0 0;
	outline: none;
	border-right: none;
	padding-left: 8px;
	padding-right: 0;

	margin-right: 0;
}

button {
	position: relative;
	right: 5px;
	height: 87%;
	border: 1px solid darkgray;
	background-color: #00003a;
	color: white;
	font-weight: bold;
	margin: 4px 0 0 0;
	border-top-right-radius: 18px;
	border-bottom-right-radius: 18px;
	cursor: pointer;
	outline: none;
	transition: all 200ms linear;
}

button:hover {
	background-color: black;
}

.title {
	background-color: #00003a;
	width: 100%;
	height: 20%;
	text-align: center;
	color: white;
	border-top-left-radius: 40px;
	border-top-right-radius: 40px;
}

.title h2 {
	position: relative;
	top: 15px;
}

.task-input {
	height: 100%;
	width: 75%;
	margin: 0 auto;
	position: relative;
	left: 5%;
}

.task {
	height: 10%;
	width: 100%;
	border-bottom: 1px solid gray;
	margin: 0px;
}

#app {
	width: 100%;
	height: 100%;
}

#main {
	position: relative;
	border-radius: 40px;
	background-color: white;
	display: flex;
	flex-direction: column;
	box-shadow: 5px 5px 15px black;
	height: 500px;
	width: 350px;
    margin: 0 auto;
    top: 20vh;
}

#task-input-bar {
	height: 12%;
	width: 100%;
	border-bottom: 1px solid gray;
}

#header {
	background-color: black;
	opacity: 0.80;
  height: fit-content;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 0 auto;
	padding: 3px;
  margin-bottom: 2.5%;
  position: fixed;
  top: 0;
  left: 0%;
}

#header h2 {
	color: white;
	white-space: nowrap;
}

#header-content {
	margin-left: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#logo {
	height: 75px;
	width: 75px;
	margin: 0;
	padding: 2%;
	margin-left: 10%
	
}

</style>
