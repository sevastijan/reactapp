import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import Hashtags from '../components/Hashtags.js'
import FeaturedArticles from '../components/FeaturedArticles'

const Main = () => (
    <Fragment>
        <Hashtags />
        <FeaturedArticles />
    </Fragment>
)

export default Main;