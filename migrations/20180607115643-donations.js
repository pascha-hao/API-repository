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
  db.createTable('donations', {
    id: {
      type: 'int', 
      primaryKey: true 
    }, 
    user_id: {
      type: 'int'
    },
    charity_id: {
      type: 'int'
    },
    amount: {
      type: 'int'
    }
  }, callback);
  
};


exports.down = function(db) {
  db.dropTable('payment')
  
};


exports._meta = {
  "version": 1
};
