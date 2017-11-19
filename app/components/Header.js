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

const FormProcurar = createReactClass({
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
        </FormGroup>


      </Navbar.Form>
    );
  },
});

const Header = createReactClass({

    getInitialState() {
        return {
            // logged: this.props.store.user || false;
            logged: true,
        };
    },

    render() {
        var NavUsuario
        var NavLogin

        if(this.state.logged === true){
            NavUsuario = (
              <Navbar.Text pullRight>
                Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
              </Navbar.Text>
            )
            NavLogin = (
              <Nav pullRight>
                <NavItem eventKey={2} href="#">
                  Logout
                </NavItem>
              </Nav>
            )
        }else{
            NavUsuario = (
              <Navbar.Text pullRight>
                Signed in as: Visitante
              </Navbar.Text>
            )
            NavLogin = (
              <Nav pullRight>
                <NavItem eventKey={2} href="/login">
                  Login
                </NavItem>
              </Nav>
            )
        }

        console.log(this.state.logged);
        console.log(NavUsuario);
        console.log(NavLogin);
        
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
              </Nav>
              <Nav>
                <NavItem eventKey={2} href="/about">About</NavItem>
              </Nav>
              {NavLogin}
              {NavUsuario}
              <Nav pullRight>
                <NavItem eventKey={3} href="#">Carrinho</NavItem>
              </Nav>
              <FormProcurar />
            </Navbar>
          </div>
    )}
})

export default Header
