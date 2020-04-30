import React from 'react';
import logo from'../logo.svg'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ButtonContainer} from './Button';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar variant="dark" expand="lg" fixed="top">
      <Navbar.Brand>
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
        <Link to="/">Shop-DZ</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer cart>
                    <span className="mr-2">
                        <i className="fa fa-cart-plus" />
                    </span>
                      Panier
                </ButtonContainer>
            </Link>
          </Nav.Item>     
          {/* <Nav.Item> */}
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            {/* <Link to="/about">{' '}About</Link> */}
          {/* </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)