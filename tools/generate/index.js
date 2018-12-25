const classes = require('./classes');

// Combine all available generate helpers
const genHelpers = [classes];

module.exports = Object.assign(...genHelpers);
