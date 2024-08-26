import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
// import Home from './components/Home';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
//import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';

function App() {


  return (
    <>
      <Navbar/>
{/*       <Home/>  */}
      {/*<RegisterPage/> */}
      {/*<LoginPage/> */}
      {/*<Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App