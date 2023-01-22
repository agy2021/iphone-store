import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Resources/logo.png";
import {  NavLink } from 'react-router-dom';

function ContainerOutsideExample() {
  return (
    <Container className="text-secondary pt-3">
      <Navbar expand="lg" variant="dark" bg="dark" className='rounded bg-dark'>
        <Container>
          <Navbar.Brand href="#"><img src={logo} alt="apple image" height="60px" /></Navbar.Brand>

          <div className="d-flex w-50 justify-content-evenly">
            
            <NavLink to="/" className="h5 text-decoration-none text-white"><i class="fi fi-rr-home"></i> Home </NavLink>
            
            <NavLink to="/pricing" className="h5 text-decoration-none text-white"><i class="fi fi-rr-dollar"></i> Pricing </NavLink>
            
            <NavLink to="/contact" className="h5 text-decoration-none text-white"><i class="fi fi-sr-phone-call"></i> Contact </NavLink>

            <NavLink to="/blog" className="h5 text-decoration-none text-white"><i class="fi fi-rr-edit"></i> Blog </NavLink>
            
            <NavLink to="/cart" className="h5 text-decoration-none text-white"><i class="fi fi-rs-shopping-cart"></i> Cart </NavLink>
            
          
          </div>

            <div>
                <button className="btn btn-light me-2 btn-outline-white me-2"> Login </button>
                <button className="btn btn-warning"> Sign up </button>
            </div>

        </Container>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;