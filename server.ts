import 'core-js';
import * as Hapi from 'hapi';

import { getWatsonSpeechToTextToken } from './watson/speech-to-text';
import { tokenSchema, translationSchema } from './schema';

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 3000,
  routes: {
    cors: true,
  },
});


server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello');
  }
});


server.route({
  method: 'GET',
  path: '/api/token',
  handler: (request, reply) => {
    getWatsonSpeechToTextToken()
      .then(obj => reply(obj))
      .catch(err => { throw err; });
  },
  config: {
    response: {
      schema: tokenSchema
    }
  }
});



server.start((err) => {
  if (err) { throw err; }
  console.log(`Server running at: ${server.info.uri}`);
});
