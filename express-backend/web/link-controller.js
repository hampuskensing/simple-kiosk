module.exports = class LinkController {

  constructor(app, linkService) {
    this.app = app;
    this.linkService = linkService;
  }

  init(app, linkService) {
    console.log('init linkController');
    this.app.get('/api/links', (req, res) => {
      this.linkService.getLinks((err, links) => {
        if (err) {
          res.status(500).send('unable to get links');
        } else {
          res.send(links);
        }
      });
    });

    this.app.post('/api/links', (req, res) => {
      const link = req.body;
      this.linkService.createLink(link, (err, links) => {
        if (err) {
          res.status(500).send('unable to create link');
        } else {
          res.send(links);
        }
      });
    });

    this.app.put('/api/links/:id', (req, res) => {
      const link = req.body;
      this.linkService.updateLink(link, (err, links) => {
        if (err) {
          res.status(500).send('unable to update link');
        } else {
          res.send(links);
        }
      });
    });

    this.app.delete('/api/links/:id', (req, res) => {
      const id = req.params.id;
      this.linkService.deleteLink(id, (err, links) => {
        if (err) {
          res.status(500).send('unable to delete link');
        } else {
          res.send(links);
        }
      });
    });
  }

};
