import Header from './Header'

const layoutStyle = {
  margin: 5,
  padding: 10,
  border: '0.2px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header></Header>
    {props.children}
  </div>
)

export default Layout
