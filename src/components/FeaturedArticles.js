import React from 'react';
import styled from 'styled-components';

import Article from './Article';

import featuredImage from '../assets/images/image-featured.png';
import defaultImage from '../assets/images/image-default.png';

const data = [
    {
        featured: true,
        title: 'Poverty To Empowerment In Chicago',
        url: '/Single',
        category: 'US',
        image: featuredImage
    },
    {
        featured: false,
        title: 'Poverty To Empowerment In Chicago',
        url: '/Single',
        category: 'Politics',
        image: defaultImage
    },
    {
        featured: false,
        title: 'Poverty To Empowerment In Chicago',
        url: '/Single',
        category: 'Tech',
        image: defaultImage
    },
];

const Container = styled.div`
    max-width: 100%;
    box-sizing: border-box;
`;

const ArticlesList = styled.ul`
    padding: 0;
    margin: 0;
`;

const Hashtags = () => (
    <Container>
        <ArticlesList>
            {data.map((item) => <Article data={item}/>) }
        </ArticlesList>
    </Container>
);

export default Hashtags;