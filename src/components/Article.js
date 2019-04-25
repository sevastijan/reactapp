import React, { Component } from 'react';
import styled from 'styled-components';

import TemplateDefault from './articles/TemplateDefault';
import TemplateFeatured from './articles/TemplateFeatured';

const ArticleItem = styled.li`
    display: block;
    border-bottom: 1px dotted #eee;
    padding: 20px 0;
    transition: background .3s;
    &:first-child {
        padding-top: 0;
    }
    &:focus, &:active {
        background: #eae8ea;
    }
`;

class Article extends Component {
    state = {
        clicked: false
    }
    render(){
        return (
            <ArticleItem onClick={() => this.setState({ clicked: true })}>
                { this.props.data.featured ? (<TemplateFeatured data={this.props.data} />) : (<TemplateDefault data={this.props.data} />) }
            </ArticleItem>
        )
    }
};

export default Article