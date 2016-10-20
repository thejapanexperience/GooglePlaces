import React from 'react';
import { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';

import ToAPIActions from '../actions/ToAPIActions'
import NormalActions from '../actions/NormalActions'
import Store from '../stores/Store'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      where: Store.getWhere(),
      list: Store.getList(),
    };
    this._search = this._search.bind(this)
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    Store.startListening(this._onChange)
  }

  componentWillUnmount(){
    Store.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      where: Store.getWhere(),
      list: Store.getList(),
    })
  }

  _search(){
    let { search } = this.refs
    console.log('in _search');
    let where = this.refs.search.getValue()
    console.log('where: ', where)
    NormalActions.search(where)
    ToAPIActions.search(where)
  }

  render() {
    let { where,list } = this.state
    let resultsList
    if(!list){
      resultsList = <div><h1>No List Yet</h1></div>
    } else {
      let places = list.json.results
      console.log('places: ', places)
      resultsList = places.map(place => {
        return (
          <div className="col-sm-4" key={place.id}>
            <div className="ui fluid card" >
              {/* <div className="image">
                <img className="ui mini image"src={place.icon}/>
              </div> */}
              <div className="content">
                <div className="header">{place.name}</div>
                <div className="meta">
                  <a>{place.id}</a>
                </div>
                <div className="description">
                  {place.formatted_address}
                </div>
              </div>
              <div className="extra content">
                <span className="right floated">
                  Joined in 2013
                </span>
                <span>
                  <i className="user icon"></i>
                  75 Friends
                </span>
              </div>
            </div>
            <br/>
          </div>
            )
          })
        }

      if(!where){

                          return (
                            <Card>
                              <CardHeader
                                title="Google MAPP"
                                subtitle="Location Search Engine"
                                avatar="http://lighthouseoflewes.com/lighting-data/images/lighthouse.png"
                              />
                              <CardMedia
                                overlay={<CardTitle title="Location Search" subtitle="insert below" />}
                              >
                                <img src="https://www.porternovelli.com/wp-content/uploads/2015/07/Tokyo_shutterstock_RF_118134214.jpg" />
                              </CardMedia>
                              <CardTitle title="Type your desired location into the box below" subtitle="click to search" />
                              <CardText>
                                <div>
                                  <TextField
                                    ref='search'
                                    hintText="Location"
                                    errorText="This field is required"
                                  /><br />
                                </div>
                              </CardText>
                              <CardActions>
                                <RaisedButton onTouchTap={this._search} label="Search" />
                              </CardActions>
                            </Card>
                          );

                        } else {
                          let url = `https://maps.googleapis.com/maps/api/staticmap?center=${where}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284`
                          return (
                            <div>
                              <Card>
                                <CardHeader
                                  title="Google MAPP"
                                  subtitle="Location Search Engine"
                                  avatar="http://lighthouseoflewes.com/lighting-data/images/lighthouse.png"
                                />
                                <CardMedia
                                  overlay={<CardTitle title="Location Search" subtitle="insert below" />}
                                >
                                  <img src={url} />
                                </CardMedia>
                                <CardTitle title="Type your desired location into the box below" subtitle="click to search" />
                                <CardText>
                                  <div>
                                    <TextField
                                      ref='search'
                                      hintText="Location"
                                      errorText="This field is required"
                                    /><br />
                                  </div>
                                </CardText>
                                <CardActions>
                                  <RaisedButton onTouchTap={this._search} label="Search" />
                                </CardActions>
                              </Card>
                              <br/>
                              <br/>
                              <div className="ui link cards">
                                {resultsList}
                              </div>

                          </div>
      )
    }

  }

}
