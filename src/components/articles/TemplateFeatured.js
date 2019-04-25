import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Image = styled.img`
    max-width: 100%;
    padding: 0 20px 10px;
    box-sizing: border-box;
`;

const Category = styled.span`
    display: block;
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #929292;
    text-decoration: none;
    text-transform: uppercase;
`;

const Title = styled.h1`
    font-size: 21px;
    color: #282828;
    margin: 10px 20px 0;
    line-height: 29px;
`;

const Article = ({ data }) => (
    <StyledLink to={data.url}>
        <Image src={data.image} alt={data.title} />
        <Category>
            {data.category}
        </Category>
        <Title>
            {data.title}
        </Title>
    </StyledLink>
)

export default Article;