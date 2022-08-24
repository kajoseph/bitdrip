'use strict';

const fs = require('fs');
const mongoose = require('mongoose');
const ObjectId = require('bson').ObjectId;
const { database } = require('../config');


async function init() {
  try {
    const connection = await mongoose.connect(`mongodb://${database.connect}`, {
      dbName: process.env.BITDRIP_DB_NAME || database.name || 'bitdrip',
      user: process.env.BITDRIP_DB_USER || database.user,
      pass: process.env.BITDRIP_DB_PASS || database.password,
      useNewUrlParser: true,
      useUnifiedTopology: true
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
  console.log('Shutting down database...');
  console.log(`Closing ${mongoose.connections.length} connection${mongoose.connections.length === 1 ? '' : 's'}...`);
  for (let c of mongoose.connections) {
    c.close(function(e) {
      if (e) { console.error(e); };
    });
  }
};

module.exports = {
  init,
  shutdown,
  ObjectId,
  ...mongoose
};
