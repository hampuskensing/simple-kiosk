module.exports = class AdService {

  constructor(database) {
    this.database = database;
  }

  getAds(callback) {
    this.database.get('ads', (err, ads) => {
      callback(null, ads);
    });
  }

  createAd(ad, callback) {
    this.database.post('ads', ad, (err, ads) => {
      callback(null, ads);
    });
  }

  updateAd(ad, callback) {
    this.database.put('ads', ad, (err, ads) => {
      callback(null, ads);
    });
  }

  deleteAd(ad, callback) {
    this.database.delete('ads', ad.id, (err, ads) => {
      callback(null, ads);
    });
  }

}
