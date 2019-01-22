import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => {
    console.log("Router : Start")
    NProgress.start();
}

Router.onRouteChangeComplete = () => {
    console.log("Router : Compolete")
    NProgress.done();
}

Router.onRouteChangeError = () => {
    console.log("Router : Error")
    NProgress.done();

}


const Logo = styled.h1`

    font-size : 4rem;
    margin-left : 2rem;
    position : relative;
    z-index : 2;
    transform : skew(-7deg);
    a{
        padding : 0.5rem 1rem;
        background : ${props => props.theme.red};
        color :white;
        text-transform : uppercase;
        text-decoration : none;
    }

    @media(max-width : 1300px){
        margin : 0;
        text-align :center;
    }
`;

const StyleHeader = styled.header`
    .bar{
        border-bottom : 10px solid ${props => props.theme.black};
        display : grid;
        grid-template-columns : auto 1fr;
        justify-content : space-between;
        align-item : stretch;
        @media(max-width : 1300px){
            grid-template-columns : 1fr;
            justify-content : center;
        }
    }

    .sub-bar{
        dispaly: grid;
        grid-template-columns : 1fr auto;
        border-bottom : 1px solid ${props => props.theme.lightgrey};

    }
`;


const Header = () => {
    return (
        <StyleHeader>
            <div className="bar">
                <Logo>
                    <Link href="">
                        <a>Sick Fits</a>
                    </Link>
                </Logo>
                <Nav />
            </div>
            <div className="sub-bar">
                <Link href="">
                    <p>Search</p>
                </Link>
            </div>
            <div>Cart</div>
        </StyleHeader>
    )
}

export default Header
