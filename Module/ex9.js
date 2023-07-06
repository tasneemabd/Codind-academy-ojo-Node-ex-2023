const crypto = require('crypto');
 
// Defining key
const secret = 'Hello, World!';
 
// Calling createHash method
const hash = crypto.createHash('md5', secret)
                   // Encoding to be used
                   .digest('hex');
 
// Displays output
console.log(hash);