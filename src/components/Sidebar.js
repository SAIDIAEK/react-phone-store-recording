import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, withRouter  } from "react-router-dom";

const StyledSideNav = styled.div`
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    /*z-index: 1;*/      /* Stay on top of everything */
    top: 3.5em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`

class SideNav extends Component{
    constructor(props){
        super(props);
        this.state={
            activePath: props.location.pathname,
            items: [
            {
                path: '/', /* path is used as id to check which NavItem is active basically */
                name: 'Home',
                css: 'fa fa-fw fa-home',
                key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
            },
            {
                path: '/phone',
                name: 'phone',
                css: 'fa fa-fw fa-phone',
                key: 2
            },
            {
                path: '/TV',
                name: 'tv',
                css: 'fa fa-fw fa-tv',
                key: 3
            },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render(){
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                    /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem 
                                path={item.path} 
                                name={item.name} 
                                css={item.css} 
                                onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ 
                                active={item.path === activePath} 
                                key={item.key}
                            />
                        )
                    })
                }
            </StyledSideNav>
        )
    }
}

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 20px;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class NavItem extends Component{
    handleClick = () => {
        const {path, onClick} = this.props;
        onClick(path);
    }
    render(){
        const{active} = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} >{/* onClick={this.handleClick} > */}
                    <NavIcon 
                        prop1={this.props.css}
                        name={this.props.name}
                    />
                </Link>
            </StyledNavItem>
        );
    }
}

const StyledNavIcon = styled.div`
    text-transform: capitalize;
`

class NavIcon extends Component{
    render(){
        return(
            <StyledNavIcon>
                <h6>{this.props.name}</h6>
            </StyledNavIcon>
        )
    }
}

const RouterSideNav = withRouter(SideNav);
export default class Sidebar extends Component {
    render() {
        return (
            <RouterSideNav>
                
            </RouterSideNav>
        )
    }
}
