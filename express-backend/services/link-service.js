module.exports = class LinkService {

  constructor(database) {
    this.database = database;
  }

  getLinks(callback) {
    this.database.get('links', (err, links) => {
      callback(null, links);
    });
  }

  createLink(link, callback) {
    this.database.post('links', link, (err, links) => {
      callback(null, links);
    });
  }

  updateLink(link, callback) {
    this.database.put('links', link, (err, links) => {
      callback(null, links);
    });
  }

  deleteLink(link, callback) {
    this.database.delete('links', link.id, (err, links) => {
      callback(null, links);
    });
  }

}
