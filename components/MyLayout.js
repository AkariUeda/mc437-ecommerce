import Header from './Header'
import Bootstrap from './Bootstrap';
import Menu from './Menu';


const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}



const Layout = (props) => (
  <div style={layoutStyle}>
    <Bootstrap />
    <Header />

    <Menu />

    {props.children}



  </div>
)

export default Layout
