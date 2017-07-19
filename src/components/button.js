import React, { Component } from 'react'
import {Row, Col, Button} from 'react-bootstrap'

class ActionButton extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={10} />
          <Col xs={2}>
            <Button bsStyle='danger' className='green-button' bsSize='large'>
             +
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ActionButton