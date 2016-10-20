// jshint esversion:6
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const axios = require('axios');
const squel = require('squel').useFlavour('mysql');
const connection = require('../config/db');
const tablename = 'favorites';

connection.query(`CREATE TABLE IF NOT EXISTS favorites (
  id INT NOT NULL AUTO_INCREMENT,
  obj VARCHAR(16000),
  uuid VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)`, (err) => {
  if (err) throw err;
});
