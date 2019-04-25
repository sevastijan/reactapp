import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    display: flex;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Image = styled.img`
    width: auto;
    height: 85px;
    margin: 0 20px 0 auto;
`;

const ArticleData = styled.div`
    margin-right: 10px;
`;
const Category = styled.span`
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #929292;
    text-decoration: none;
    text-transform: uppercase;
`;

const Title = styled.h1`
    font-size: 15px;
    color: #282828;
    margin: 10px 0 0 20px;
    line-height: 21px;
`;

const Article = ({ data }) => (
    <StyledLink to={data.url}>
        <ArticleData>
            <Category>
                {data.category}
            </Category>
            <Title>
                {data.title}
            </Title>
        </ArticleData>
        <Image src={data.image} alt={data.title} />
    </StyledLink>
)

export default Article;