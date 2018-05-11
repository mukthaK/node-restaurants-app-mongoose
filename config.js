'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://new-user:pass123@ds113870.mlab.com:13870/restaurant-app-db';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://new-user:pass123@ds113870.mlab.com:13870/restaurant-app-db';
exports.PORT = process.env.PORT || 8080;