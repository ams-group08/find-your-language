import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

import './custom.css'
import Trends from './components/Trends';
import AboutUs from './components/AboutUs';
import GraphGithub from './components/GraphGithub';
import GraphReddit from './components/GraphReddit';
import GraphStackoverflow from './components/GraphStackoverflow';
import GraphGoogleTrend from './components/GraphGoogleTrend';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/trends' component={Trends} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/graph/github' component={GraphGithub} />
            <Route path='/graph/stackoverflow' component={GraphStackoverflow} />
            <Route path='/graph/reddit' component={GraphReddit} />
            <Route path='/graph/GoogleTrends' component={GraphGoogleTrend} />
      </Layout>
    );
  }
}
