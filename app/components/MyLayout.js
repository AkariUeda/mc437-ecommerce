import Header from './Header'
import Theme from '../components/Theme';
import createReactClass from 'create-react-class';
import indexStyle from '../styles/index.scss';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

const layoutStyle = {
  margin: 5,
  padding: 10,
  border: '0.2px solid #DDD'
}

const Categorias = createReactClass({
    render (){
        return (
            <ListGroup>
              <ListGroupItem href="#">
                Brincadeiras
              </ListGroupItem>
              <ListGroupItem href="#">
                Lingeries
              </ListGroupItem>
              <ListGroupItem href="#">
                Acessórios
              </ListGroupItem>
              <ListGroupItem href="#">
                Cosméticos
              </ListGroupItem>
            </ListGroup>
        )
    }

})

const Layout = (props) => (
  <Theme>
    <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
    <div style={layoutStyle}>
      <Header></Header>
      <Grid bsClass='GridLayout'>
        <Row className="show-grid">
          <Col sm={6} md={2}>
            <h2>Categorias</h2>
            <Categorias />
          </Col>
          <Col sm={10}>
            {props.children}
          </Col>
        </Row>
      </Grid>
    </div>
  </Theme>
)

export default Layout
