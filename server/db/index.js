'use strict';

const fs = require('fs');
const mongoose = require('mongoose');
const ObjectId = require('bson').ObjectId;
const { database } = require('../config');


async function init() {
  try {
    const connection = await mongoose.connect(`mongodb://${process.env.BITDRIP_DB_HOST || database.connect}`, {
      dbName: process.env.BITDRIP_DB_NAME || database.name || 'bitdrip',
      user: process.env.BITDRIP_DB_USER || database.user,
      pass: process.env.BITDRIP_DB_PASS || database.password
    });

    console.log('database connected!');

    // Register the schemas
    const schemas = fs.readdirSync(__dirname + '/schemas');

    for (let schema of schemas) {
      require(`./schemas/${schema}`);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

async function shutdown() {
  console.log(`Closing ${mongoose.connections.length} DB connection${mongoose.connections.length === 1 ? '' : 's'}...`);
  for (let c of mongoose.connections) {
    try {
      await c.close();
    } catch (e) {
      console.log(e);
    }
  }
  console.log('...all DB connections closed.');
};

module.exports = {
  init,
  shutdown,
  ObjectId,
  ...mongoose
};
