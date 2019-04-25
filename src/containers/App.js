import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Location,
} from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import Header from '../components/Header'
import Main from './Main';
import Single from './Single';

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
    <Route>
        {({ location }) => (
        <PoseGroup>
            <RouteContainer key={location.key}>
                <Router location={location}>{children}</Router>
            </RouteContainer>
        </PoseGroup>
        )}
    </Route>
);

const App = ({ location }) => (
    <Fragment>
        <Router>
            <Header />
            <PosedRouter>
                <Route exact path="/" component={Main}/>
                <Route path="/Single" component={Single}/>
            </PosedRouter>
        </Router>
    </Fragment>
);

export default App;