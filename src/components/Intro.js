import React from 'react';
import { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import ToAPIActions from '../actions/ToAPIActions'

export default class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Google MAPP"
          subtitle="Location Search Engine"
          avatar="http://lighthouseoflewes.com/lighting-data/images/lighthouse.png"
        />
        <CardMedia
          overlay={<CardTitle title="Welcome to MAPP" subtitle="the Google Maps Static Searcher" />}
        >
          <img src="http://www.saltyseadogs.org.uk/wp-content/uploads/2014/05/South-Shields-Beach-and-Pier.jpg" />
        </CardMedia>
      </Card>
    );
  }

}
