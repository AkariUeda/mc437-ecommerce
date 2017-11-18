import Link from 'next/link'
import Theme from '../components/Theme';
import createReactClass from 'create-react-class';
import indexStyle from '../styles/index.scss';
import { Button } from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'
import { HelpBlock } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const linkStyle = {
  marginRight: 15
}

const FormExample = createReactClass({
  getInitialState() {
    return {
      value: '',
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 3) return 'success';
    else if (length > 2) return 'warning';
    else if (length > 0) return 'error';
    return null;
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <Navbar.Form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Procurar Produtos"
            onChange={this.handleChange}
          />
          {' '}
          <Button type="submit">Procurar</Button>
          <FormControl.Feedback />
        </FormGroup>
      </Navbar.Form>
    );
  },
});

const Header = createReactClass({
    render() {
        var NavUsuario
        var NavLogin

        // var logged = this.props.store.user || false;
        var logged = false;

        if(this.logged){
            NavUsuario = (
              <Navbar.Text>
                Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
              </Navbar.Text>
            )
            NavLogin = (
              <NavItem eventKey={2} href="#">
                Logout
              </NavItem>
            )
        }else{
            NavUsuario = (
              <Navbar.Text pullRight>
                Signed in as: Visitante
              </Navbar.Text>
            )
            NavLogin = (
              <Nav pullRight>
                <NavItem eventKey={2} href="#">
                  Login
                </NavItem>
              </Nav>
            )
        }
        
        return (
          <div class="header">
            <Navbar fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">E-Commerce</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavItem eventKey={1} href="/">Home</NavItem>
                <NavItem eventKey={2} href="/about">About</NavItem>
              </Nav>
              {NavUsuario}
              {NavLogin}
              <Nav pullRight>
                <NavItem eventKey={3} href="#">Carrinho</NavItem>
              </Nav>
              <FormExample />
            </Navbar>
          </div>
    )}
})

export default Header
