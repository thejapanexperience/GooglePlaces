// jshint esversion:6
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Search from './Search'
import Intro from './Intro'
import Saved from './Saved'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const Landing = () => (
  <Tabs>
    <Tab label="MAPP" >
      <Intro/>
    </Tab>
    <Tab label="Search" >
      <Search/>
    </Tab>
    <Tab label="Saved">
      <Search/>
    </Tab>
  </Tabs>
);

export default Landing;
