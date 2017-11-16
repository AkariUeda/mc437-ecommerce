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
      <Form inline>
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
      </Form>
    );
  },
});

const Header = () => (
  <div>
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">E-Commerce dos Migué</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/about">About</NavItem>
      </Nav>
    </Navbar>
    <FormExample />
  </div>
)

export default Header
