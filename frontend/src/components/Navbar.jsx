import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegUser, FaShoppingCart, FaFacebook, FaTelegram} from "react-icons/fa";
import { Link } from 'react-router-dom';

import avatarImg from '../assets/avatar.png'
import { useState } from 'react';

const navigation =[
  {name: "Dashboard", href:"/user-dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
];


function NavScrollExample() {
  const [isDropdownOpen,setIsDropdownOpen]=useState(false)
  const currentUser=true
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">R-BOOK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <div className="ms-auto">
            {
              currentUser? <>
                <button onClick={()=> setIsDropdownOpen(!isDropdownOpen)}>
                
                <img src={avatarImg} className='rounded-circle' />
                </button>
              </>:<FaRegUser className='ms-auto me-3' />
            }
          </div>
          <Link to='/cart' className='mb-1 me-3'>
            <FaShoppingCart />
            <span className='px-1'>0</span>
          </Link>
          <Link to='/' className='mb-1 me-3'>
            <FaFacebook />
          </Link>
          <Link to='/' className='mb-1 me-3'>
            <FaTelegram />
          </Link>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;