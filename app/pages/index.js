import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Grid } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import createReactClass from 'create-react-class';

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const gridinstance = () => (
  <Grid>
    <Row className="show-grid">
        <Col xs={12} md={8}>ode</Col>
      <Col xs={6} md={4}>de</Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={4}>asd</Col>
      <Col xs={6} md={4}>asd</Col>
      <Col xsHidden md={4}>asd</Col>
    </Row>
  </Grid>
);

export default () => (
<div>
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
  <gridinstance />
</div>       
)
