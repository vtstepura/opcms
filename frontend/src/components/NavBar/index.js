import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Nav, Navbar, Container } from 'react-bootstrap'
import { resourceDeleteRequest } from '../../store/auth/actions'

class NavBar extends Component {
  render(){
    const { history } = this.props
    return (
      <Navbar bg="light" expand="lg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 70, flexDirection: 'row'}}>
        <div style={{ width: '73%',}}>
        <Nav>
          <Nav.Link onClick={() => history.push('/')} style={{ fontSize: 20, fontWeight: 'bold'}}>Client</Nav.Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
              <Navbar.Brand>Eugene</Navbar.Brand>
              <Button onClick={() => this.props.onDeleteAuth()}>Log Out</Button>
            </Form>
          </Navbar.Collapse>
        </Nav>

        </div>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => ({
  current_maneger: state.auth.data
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteAuth: () => dispatch(resourceDeleteRequest('authentications'))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
