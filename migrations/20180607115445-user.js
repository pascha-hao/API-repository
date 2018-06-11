'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('user', {
    id: {
      type: 'int', 
      primaryKey: true 
    }, 
    first_name: {
      type: 'string',
      length: 40
    },
    last_name: {
      type: 'string',
      length: 40
    },
    dob: {
      type: 'date'
    },
    email: {
      type: 'string',
      length: 50
    }
  }, callback);
  
};

exports.down = function(db) {
  db.dropTable('user')
  
};


exports._meta = {
  "version": 1
};
