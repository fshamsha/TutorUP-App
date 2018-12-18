import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';
import { Provider } from 'react-redux';
import './App.css';
import withStyles from '@material-ui/core/styles/withStyles';

import CssBaseline from '@material-ui/core/CssBaseline';

// components
import AppNavbar from './components/layout/AppNavbar';
import AppFooter from './components/layout/AppFooter';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ProgressSpinner from './components/common/ProgressSpinner';

import AppSearch from './components/search/AppSearch'

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  appBarSpacer: theme.mixins.toolbar,
})

class App extends Component {

  render() {
    const { classes } = this.props;
    return (
        <Router>
          <div className="App">
            <CssBaseline />
            <AppNavbar />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Route exact path="/search" component={AppSearch} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </main>
          </div>
        </Router>
    );
  }
}

export default withStyles(styles)(App);
