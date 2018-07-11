import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//import store
import store, { history } from './store';

// import css
import css from './styles/style.styl';

// import components
import App from  './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


const router = (
  <Provider store={store}>

    <Router history={history}>
      <Route exact path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>

  </Provider>
)


render(router, document.getElementById('root'));
