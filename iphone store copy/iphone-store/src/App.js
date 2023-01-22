import './App.css';
import Home from './Pages/Home';
import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Blog from './Pages/Blog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContainerOutsideExample from "./Components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ContainerOutsideExample/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/blog" element={<Blog/>} />
        
      </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;