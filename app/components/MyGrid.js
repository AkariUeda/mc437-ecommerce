import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import createReactClass from 'create-react-class';


const GridProduto = createReactClass({

    getProdutos() {
        return [
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            'Donec hendrerit tempor tellus.',
            'Donec pretium posuere tellus.'
        ];
    },

    render() {
        var produtos = this.getProdutos();
        var colunasM = 4;
        var colunasS = 3;

        return (
          <div>
          <Grid bsClass='GridProduto' >
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 1</h2>
                {produtos[0]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 2</h2>
                {produtos[1]}
              </Col>
              <Col sm={colunasS} md={colunasM}>
                <h2>Produto 3</h2>
                {produtos[2]}
              </Col>
            </Row>
          </Grid>
          </div>
        );
    }
});

export default GridProduto;
