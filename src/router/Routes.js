import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Loading from '../components/Loading';
import './Routes.css';

// Lazy load components
const LoadableHome = React.lazy(() =>
  import(/* webpackChunkName:"home" */ '../pages/Home'),
);
const Home = () => <LoadableHome />;


const LoadableProcess = React.lazy(() =>
  import(/* webpackChunkName:"Process" */ '../pages/Process'),
);
const Process = () => <LoadableProcess />;


const LoadableCasestudies = React.lazy(() =>
  import(/* webpackChunkName:"Casestudies" */ '../pages/Casestudies'),
);
const Casestudies = () => <LoadableCasestudies />;

const LoadableResume = React.lazy(() =>
  import(/* webpackChunkName:"Resume" */ '../pages/Resume'),
);
const Resume = () => <LoadableResume />;

const LoadableContact = React.lazy(() =>
  import(/* webpackChunkName:"Contact" */ '../pages/Contact'),
);
const Contact = () => <LoadableContact />;

// animated route configuration
const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    native: true,
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props} className="Route-animation">
      <React.Suspense fallback={<Loading />}>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Process">
            <Process />
          </Route>
          <Route path="/Casestudies">
            <Casestudies />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </React.Suspense>
    </animated.div>
  ));
};

export default Routes;
