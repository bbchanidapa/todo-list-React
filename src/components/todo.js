import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
			done: false
		}
	  this.toggle = this.toggle.bind(this)
    this.deleteList = this.props.deleteList.bind(this)
    this.editList = this.props.editList.bind(this)
    
  }
  toggle (){
		this.setState({
			done: !this.state.done
		})
  }
  onClicked (){
  	console.log("click")
  }

  render () {
    return (
      <div>
        <Row>
          <Col xs={1}>
            <div>
             {/* <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}> {this.props.time} <br />
                <span> { this.props.period }</span>
              </p>*/ }
              <input type="checkbox" 
	    			value = {this.state.done}
	    			onClick = {this.toggle}
	    	  />
	    	  
            </div>
          </Col>
          <Col xs={10}>
            <h4 id='activity-title' onClick={this.deleteList.bind(this, this.props.id)}> { this.state.done ? <strike> {this.props.title } </strike> : this.props.title  }</h4>
            <p> { this.props.description } : {this.props.date} </p>
          </Col>
		  <Col xs={1}>
            <Row style={{paddingTop: '10px'}}>
               <Col xs={6}> <button onClick={this.deleteList.bind(this, this.props.id)}> - </button></Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Todo