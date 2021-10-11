import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from'../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 fixed-top">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    {/* <!-- Dropdown --> */}
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown">
                            Catégorie
                        </Link>
                        <div className="dropdown-menu">
                            <div className="categorie-lien">
                                <Link className="dropdown-item" to="/phone">
                                    <span>Téléphones Portables</span> 
                                    <i className="fa fa-mobile float-right" />
                                </Link>
                            </div>
                            <div className="categorie-lien">
                                <Link className="dropdown-item" to="/TV">
                                    <span>Télévisions</span> 
                                    <i className="fa fa-tv float-right" />
                                </Link>
                            </div>
                        </div>
                    </li>

 {/*                    <li className="nav-item ml-5">
                        <Link to="/phone" className="nav-link">
                            Phones
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/TV" className="nav-link">
                            Télévisions
                        </Link>
                    </li> */}
                </ul>
                
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer cart>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                         Panier
                    </ButtonContainer>
                </Link>
            </NavWrapper>
            
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transfom: capitalize;
    }
`
