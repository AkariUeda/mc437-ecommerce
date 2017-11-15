import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import createReactClass from 'create-react-class';


const MyGrid = createReactClass({

    getProdutos() {
        return [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.',
            'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
        ];
    },

    render() {
        var produtos = this.getProdutos();

        return (
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={6} md={3}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={6} md={3}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
              <Col sm={6} md={3}>
                <h2>Produto 4</h2>
                {produtos[3]}
              </Col>
            </Row>
          </Grid>
        );
    }
});

export default MyGrid;
