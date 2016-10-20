// jshint esversion:6
import React, { Component } from 'react';
import { Link } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Landing from './Landing'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class Layout extends Component {

  handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }


  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Landing>
          {this.props.children}
        </Landing>

      </MuiThemeProvider>
    );
  }
}
