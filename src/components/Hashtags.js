import React from 'react';
import styled from 'styled-components';

const data = [
    '#TechDesign', '#Healthcare Revolution', '#Future equipment', '#TechDesign', '#Healthcare Revolution', '#Future equipment'
]

const Container = styled.div`
    max-width: 100%;
    overflow-x: scroll;
    padding-left: 20px;
    box-sizing: border-box;
`;

const HashtagsList = styled.ul`
    padding: 0;
    white-space: nowrap;
`;

const HashtagItem = styled.li`
    display: inline-flex;
    margin-right: 10px;
`;


const Hashtags = () => (
    <Container>
        <HashtagsList>
            {data.map((item) => <HashtagItem>{item}</HashtagItem>) }
        </HashtagsList>
    </Container>
);

export default Hashtags;