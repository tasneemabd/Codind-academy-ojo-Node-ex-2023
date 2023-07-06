const dns = require('dns');

const hostname = 'www.google.com';

dns.resolve4(hostname, (err, addresses) => {
  if (err) {
    console.error(`Error resolving hostname: ${err}`);
    return;
  }

  console.log(`IP addresses for ${hostname}:`);
  addresses.forEach((address) => {
    console.log(address);
  });
});
