import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logoLink from '../assets/images/logo.png';

import NavigationContent from './Navigation'

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`;
const Logo = styled.a`
    width: 200px;
`
const Navigation = styled.div`
    position: absolute;
    top: 18px;
    left: 20px;
`;

const Search = styled.div`
`;

const Header = () => (
    <div>
        <HeaderContainer>
            <Navigation>
                <NavigationContent />
            </Navigation>
            <Link to="/">
                <Logo>
                    <img src={logoLink} alt="The Fortnightly" />
                </Logo>
            </Link>
        </HeaderContainer>
    </div>
);

export default Header;