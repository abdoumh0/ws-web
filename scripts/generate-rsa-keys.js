const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Generate RSA key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
});

// Create keys directory if it doesn't exist
const keysDir = path.join(__dirname, '..', 'keys');
if (!fs.existsSync(keysDir)) {
  fs.mkdirSync(keysDir, { recursive: true });
}

// Write keys to files
fs.writeFileSync(path.join(keysDir, 'private.pem'), privateKey);
fs.writeFileSync(path.join(keysDir, 'public.pem'), publicKey);

console.log('RSA key pair generated successfully!');
console.log('Private key saved to: keys/private.pem');
console.log('Public key saved to: keys/public.pem');

// Also output as base64 for environment variables
console.log('\nFor environment variables:');
console.log('JWT_PRIVATE_KEY=' + Buffer.from(privateKey).toString('base64'));
console.log('JWT_PUBLIC_KEY=' + Buffer.from(publicKey).toString('base64')); 