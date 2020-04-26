import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from'../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
{/*                     <li className="dropdown notifications-menu">
                        <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-bell-o" />
                            <span className="label label-success">2</span>
                        </Link>
                        <ul className="dropdown-menu">
                                <li className="header">You have 2 catégories</li>
                                <li>
                                
                                <ul className="menu">
                                    <li>
                                        <Link to="phone">
                                            <i className="fa fa-mobile text-yellow" /> Phones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="TV">
                                            <i className="fa fa-users text-red" /> Télévisions
                                        </Link>
                                    </li>
                                </ul>
                                </li>
                                <li className="footer"><Link to="/">View all</Link></li>
                        </ul>
                    </li> */}
                    <li className="nav-item ml-5">
                        <Link to="/phone" className="nav-link">
                            Phones
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/TV" className="nav-link">
                            Télévisions
                        </Link>
                    </li>
                </ul>
                
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer cart>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                         my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transfom: capitalize;
    }
`