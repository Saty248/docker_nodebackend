module.exports = {
	MONGO_USER : process.env.MONGO_USER ,
	MONGO_USER1 : process.env.MONGO_USER1,
	REDIS_URL:process.env.REDIS_URL || "redis",
	SESSION_SECRET:process.env.SESSION_SECRET,
};
