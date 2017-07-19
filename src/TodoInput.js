import React, { Component } from 'react'

class TodoInput extends Component {

	constructor(props) {
		super(props)
		this.state = {
			newTodo: ""
		}
		this.addClicked = this.addClicked.bind(this)
	}

	addClicked(){
		let {onAddTodo} = this.props
		onAddTodo(this.state.newTodo)
		this.setState ({
			newTodo: "",
			name: ""
		})
		console.log(this.state)
	}

	render(){
		let {newTodo,name} = this.state
	    return (
	    	<div>
	    		<input value={name } onChange={(event)=> this.setState({name: event.target.value})}/>
	    		<input value={newTodo} onChange={(event)=> this.setState({newTodo: event.target.value})}/>
	    		<button onClick={this.addClicked }>+</button>
	    	</div>
	    )
	}
}
export default TodoInput