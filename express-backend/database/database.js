const fs = require('fs');

module.exports = class Database {

  constructor(devMode) {
    this.devMode = devMode;
    this.tables = {
      ads: {
        FILE_NAME: 'database/ads.json',
        cache: []
      },
      links: {
        FILE_NAME: 'database/links.json',
        cache: []
      }
    };
  }


  init() {
    console.log('init database');
    Object.keys(this.tables).forEach((tableName) => {
      const table = this.tables[tableName];
      this.readJsonFile(table.FILE_NAME, (contents) => {
        table.cache = contents;
      });
    });
  }

  get(tableName, callback) {
    callback(null, this.tables[tableName].cache);
  }

  post(tableName, entity, callback) {
    const table = this.tables[tableName];
    table.cache.push(entity);
    callback(null, table.cache);
    this.persist(tableName);
  }

  put(tableName, entity, callback) {
    const table = this.tables[tableName];
    table.cache = table.cache.filter(e => e.id !== entity.id);
    table.cache.push(entity);
    callback(null, table.cache);
    this.persist(tableName);
  }

  delete(tableName, entityId, callback) {
    const table = this.tables[tableName];
    table.cache = table.cache.filter(entry => entry.id !== entityId);
    callback(null, table.cache);
    this.persist(tableName);
  }

  persist(tableName) {
    const table = this.tables[tableName];
    if (!this.devMode) {
      console.log('persist ' + tableName + ' table.');
      this.writeJsonFile(table.FILE_NAME, table.cache);
    } else {
      console.log('Skip persist ' + tableName + ' table because dev mode.');
    }
  }

  readJsonFile(fileName, callback) {
    fs.readFile(fileName, 'utf8', function(err, contents) {
      if (err) {
        throw err;
      }

      console.log('Successfully read file', fileName);
      callback(JSON.parse(contents));
    });
  };

  writeJsonFile(fileName, jsonContent) {
    fs.writeFile(fileName, JSON.stringify(jsonContent), function(err) {
      if(err) {
        throw err;
      }

      console.log('Successfully wrote file', fileName);
    });
  };

};
