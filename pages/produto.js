import Layout from '../components/MyLayout.js'
import React from 'react';
import { Grid, Thumbnail, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const DescricaoProduto = (produto) => (
    <div>
    <Layout>
    <h1>
        {produto.name}
        JESUS
        </h1>
    </Layout>
    </div>


)


export default DescricaoProduto
