const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Database = require('./database/database');
const AdService = require('./services/ad-service');
const LinkService = require('./services/link-service');
const AdController = require('./web/ad-controller');
const LinkController = require('./web/link-controller');

const database = new Database(false);
const adService = new AdService(database);
const linkService = new LinkService(database);
const adController = new AdController(app, adService);
const linkController = new LinkController(app, linkService);

database.init();
adController.init();
linkController.init();

app.listen(3000, () => console.log('Kiosk backend app is listening on port 3000!'));
