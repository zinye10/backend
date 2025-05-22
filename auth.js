const { AuthenticationError } = require('apollo-server-express');

const getUserFromToken = (token) => {
  if (!token) return null;

  try {
    return jwt.verify(token, 'YOUR_SECRET_KEY');
  } catch (err) {
    throw new AuthenticationError('Invalid/Expired token');
  }
};

module.exports = getUserFromToken;
