import React, { Component } from 'react'
import './App.css'
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'
import TodoList from './components/todoList.js'
import Button from './components/button.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          date: "ss",
          title: 'Meeting Startup',
          description: '#Reactjs working'
        },
        {
          id: '_' + Math.random().toString(36).substr(2, 9),
          date: "ss",
          title: 'Meeting learn Angular',
          description: '#Angular working'
        }
      ]
    }
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo (newTodo){
    console.log(newTodo)
    this.state.todos.push(newTodo)
    this.setState({todos: this.state.todos})
  }
  deleteList (index) {
    var id = this.state.todos.findIndex((item) => item.id === index)

    this.state.todos.splice(id, 1)
    this.setState({todos: this.state.todos})
  }
  editList (){

  }

  render () {
    
    return (
      <div style={{padding: '30px 30px'}}>
        <Header />
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList todos= { this.state.todos} deleteList={this.deleteList.bind(this)} editList={this.editList.bind(this)}/>
        {/*<Button />*/}
      </div>
    )
  }
}

export default App