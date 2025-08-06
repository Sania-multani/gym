import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import About from './component/About';
import Shop from './component/Shop';
import Classes from './component/Classes';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import Privacypolicy from './component/Privacypolicy';
import Faq from './component/Faq';
import Detail from './component/Detail';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about-us" element={<About/>}/> 
     <Route path="shop" element={<Shop/>}/>  
    <Route path="classes" element={<Classes/>}/>  
    <Route path="login" element={<Login/>}/>  
    <Route path="cart" element={<Cart/>}/> 
     <Route path="contact" element={<Contact/>}/> 
     <Route path="privacy" element={<Privacypolicy/>}/> 
      <Route path="faq" element={<Faq/>}/> 
    </Route>
     <Route path="/register" element={<Register/>}/>  
      <Route path="/profile" element={<Profile/>}/> 
      <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/detail" element={<Detail/>}/> 
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
