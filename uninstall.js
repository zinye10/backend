const Service = require('node-windows').Service;
const path = require('path');

const svc = new Service({
  name: 'graphqlserver', // must match the original service name
  script: path.join(__dirname, 'index.js'),
});

svc.on('uninstall', () => {
  console.log('Service uninstalled');
});

svc.uninstall();
