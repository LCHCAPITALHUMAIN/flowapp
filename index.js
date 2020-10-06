'use strict';

var fs = require('fs'),
  path = require('path'),
  http = require('http'),
  auth = require('basic-auth');

require('dotenv').config();

const { SF_CONSUMER_KEY, SF_USERNAME, SF_LOGIN_URL, BASIC_USERNAME, BASIC_PASSWORD } = process.env;

if (!(SF_CONSUMER_KEY && SF_USERNAME && SF_LOGIN_URL && BASIC_USERNAME && BASIC_PASSWORD)) {
  console.error(
    'Cannot start app: missing mandatory configuration. Check your environment variables'
  );
  process.exit(-1);
}

var app = require('connect')();

var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = process.env.PORT || 80;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  app.use(middleware.swaggerSecurity({
    basic: function (req, def, scopes, callback) {
      let user = auth.parse(req.headers.authorization);
      if (user.name === BASIC_USERNAME && user.pass === BASIC_PASSWORD) {
        callback();
      } else {
        callback({ statusCode: 401 });
      }
    }
  }));

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
