const express = require('express');
const app = express();

const ads = [
  {
    id: 'brodrost',
    imageUrl: '/images/test.jpg'
  },{
    id: 'kaffebryggare',
    imageUrl: '/images/test.jpg'
  },{
    id: 'kylskap',
    imageUrl: '/images/test.jpg'
  },{
    id: 'stekhall',
    imageUrl: '/images/test.jpg'
  }];

const links = [
  {
    id: 'google',
    name: 'Google',
    link: 'www.google.se',
    imageUrl: '/images/test.jpg'
  },{
    id: 'massdrop',
    name: 'Massdrop',
    link: 'www.massdrop.com',
    imageUrl: '/images/test.jpg'
  },{
    id: 'engadget',
    name: 'Engadget',
    link: 'www.engadget.com',
    imageUrl: '/images/test.jpg'
  }
];

app.get('/api/ads', (req, res) => res.send(JSON.stringify(ads)));
app.get('/api/links', (req, res) => res.send(JSON.stringify(links)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
