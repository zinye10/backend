const Service = require('node-windows').Service;

const svc = new Service({
  name: 'graphqlserver',
  description: 'Apollo GraphQL server on Windows',
  script: require('path').join(__dirname, 'index.js'),
  env: [
    {
      name: 'PORT',
      value: '4000',
    }
  ]
});

svc.on('install', () => {
  svc.start();
});

svc.install();
