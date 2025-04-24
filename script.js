const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure you load the .env variables

const encrypt = (payload) => {
  // Create a token from the payload
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const decrypt = (token) => {
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Success:", decoded);
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error.message);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};