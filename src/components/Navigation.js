import React, { Fragment } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import styled from 'styled-components';

import returnArrowURL from '../assets/images/icon-arrow.svg'

const ReturnArrow = styled.div`
    width: 20px;
`;

const MenuLine = styled.span`
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 4px;
    background-color: #000;
`;

const Navigation = ({ history }) => (
    <Fragment>
        {history.location.pathname === '/Single'
            ? (
                <ReturnArrow>
                    <Link to="/">
                        <img src={returnArrowURL} alt="Back to home" />
                    </Link>
                </ReturnArrow>
            ) : (
                <div>
                <Link to="/">
                    <MenuLine />
                    <MenuLine />
                    <MenuLine />
                </Link>
            </div>
            )
        }   
    </Fragment>
);

export default withRouter(Navigation);

