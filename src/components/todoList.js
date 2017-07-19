import React, { Component} from 'react'
import Todo from './todo.js'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.deleteList = this.props.deleteList.bind(this)
    this.editList = this.props.editList.bind(this) 
  }

  render () {
    return (
    	<div>
			{ 	this.props.todos.map((item, index) => {
					return (<Todo
						key={index}
						id={item.id}
						date={item.date}
						title={item.title}
						description={item.description}
						deleteList={this.deleteList}
						editList={this.editList}
					/>)
				})
			}
		</div>
    )
  }
}

export default TodoList