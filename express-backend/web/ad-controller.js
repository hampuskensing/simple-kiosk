module.exports = class AdController {

  constructor(app, adService) {
    this.app = app;
    this.adService = adService;
  }

  init() {
    console.log('init adController');
    this.app.get('/api/ads', (req, res) => {
      this.adService.getAds((err, ads) => {
        if (err) {
          res.status(500).send('unable to get ads');
        } else {
          res.send(ads);
        }
      });

    });

    this.app.post('/api/ads', (req, res) => {
      const ad = req.body;
      this.adService.createAd(ad, (err, ads) => {
        if (err) {
          res.status(500).send('unable to create ad');
        } else {
          res.send(ads);
        }
      });
    });

    this.app.put('/api/ads/:id', (req, res) => {
      const ad = req.body;
      this.adService.updateAd(ad, (err, ads) => {
        if (err) {
          res.status(500).send('unable to update ad');
        } else {
          res.send(ads);
        }
      });
    });

    this.app.delete('/api/ads/:id', (req, res) => {
      const id = req.params.id;
      this.adService.deleteAd(id, (err, ads) => {
        if (err) {
          res.status(500).send('unable to delete ad');
        } else {
          res.send(ads);
        }
      });
    });
  }

};
