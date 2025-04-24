const { encrypt, decrypt } = require('./script');

const payload = { username: "kalvian123" };

// Encrypt the payload
const token = encrypt(payload);
console.log("Encrypted Token:", token);

// Decrypt the token
const decoded = decrypt(token);