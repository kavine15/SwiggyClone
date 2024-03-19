import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProductDetail from './components/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductSearch from './components/ProductSearch'
import Login from './components/Login';



function App() {
  return (
    <Router>
        <Header/>
      <HelmetProvider>
         <ToastContainer theme='dark' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SignIn' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/search/:keyword' element={<ProductSearch/>} />
        </Routes>
      </HelmetProvider>
      <Footer/>
    </Router>
  
  );
}

export default App;
