import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import Trends from './components/Trends';
import AboutUs from './components/AboutUs';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/trends' component={Trends} />
            <Route path='/aboutus' component={AboutUs} />
      </Layout>
    );
  }
}
