import {chai, assert} from '../common';

import request from 'supertest';
import app from '../../server/src/index';


describe('Testing the home page HTTP request', () => {
  it('home shoud response 200', (done) => {
    request(app).get("/")
      .expect(200, done);
  });
})

