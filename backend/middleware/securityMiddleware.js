const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const applySecurityMiddleware = (app) => {
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(cors());
};


module.exports = applySecurityMiddleware;