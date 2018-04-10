import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//
import Routes from 'react-static-routes';
import Header from './partials/header';
import Footer from './partials/footer';

import '../sass/main.sass';

const App = () => (
  <Router>
    <div className="root-b">
      <Header />
      <main className="content">
        <Routes />
      </main>
      <Footer />
    </div>
  </Router>
)

export default hot(module)(App)
