const bcrypt = require('bcryptjs'); /// <<<<<< install it and require it

const authenticate = require('../users-model.js');

module.exports = authenticate;

module.exports = (req, res, next) => {
	if (req.session && req.session.user) {
		next();
	} else {
		res.status(401).json({ message: 'You are not authorized' });
	}
};