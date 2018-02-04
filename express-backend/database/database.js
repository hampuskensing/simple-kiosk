const fs = require('fs');

module.exports = class Database {

  constructor(devMode) {
    this.devMode = devMode;
    this.tables = {
      ads: {
        FILE_NAME: 'database/ads.json',
        data: [],
        idCounter: null
      },
      links: {
        FILE_NAME: 'database/links.json',
        data: [],
        idCounter: null
      }
    };
  }


  init() {
    console.log('init database');
    Object.keys(this.tables).forEach((tableName) => {
      const table = this.tables[tableName];
      this.readJsonFile(table.FILE_NAME, (contents) => {
        table.data = contents.data;
        table.idCounter = contents.idCounter;
      });
    });
  }

  get(tableName, callback) {
    callback(null, this.tables[tableName].data);
  }

  post(tableName, entity, callback) {
    const table = this.tables[tableName];
    entity.id = table.idCounter++;
    table.data.push(entity);
    callback(null, table.data);
    this.persist(tableName);
  }

  put(tableName, entity, callback) {
    const table = this.tables[tableName];
    table.data = table.data.filter(e => e.id !== entity.id);
    table.data.push(entity);
    callback(null, table.data);
    this.persist(tableName);
  }

  delete(tableName, entityId, callback) {
    const table = this.tables[tableName];
    table.data = table.data.filter(entry => entry.id !== entityId);
    callback(null, table.data);
    this.persist(tableName);
  }

  persist(tableName) {
    const table = this.tables[tableName];
    if (!this.devMode) {
      console.log('persist ' + tableName + ' table.');
      this.writeJsonFile(table.FILE_NAME, { data: table.data, idCounter: table.idCounter });
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
