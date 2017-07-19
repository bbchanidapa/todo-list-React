import React, { Component } from 'react'

class TodoInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: '_' + Math.random().toString(36).substr(2, 9),
			date: "",
			title: "",
			description: ""	
		}
		this.addClicked = this.addClicked.bind(this)
	}

	addClicked(){
		let {onAddTodo} = this.props
		
		this.setState ({
			id: "",
			date: "",
			title: "",
			description: ""
		})
		onAddTodo(this.state)
	}

	render(){
		let {description,title,date} = this.state
	    return (
	    	<div>
	    		<div>
	    	    	Date: <input value={date} onChange={(event)=> this.setState({date: event.target.value})} />
	    		</div>
	    		<div>
	    			Title: <input value={title} onChange={(event)=> this.setState({title: event.target.value})} />
	    		</div>
	    	    	description: <input value={description} onChange={(event)=> this.setState({description: event.target.value})}/>
	    		<button onClick={this.addClicked }>+</button>
	    	</div>
	    )
	}
}
export default TodoInput