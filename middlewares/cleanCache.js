const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
	await next();
	console.log('CACHE CLEAN');
	clearHash(req.user.id);
};
