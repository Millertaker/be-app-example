import {chai, assert} from '../common';
import httpMocks from 'express-mocks-http';
import assertPromise from 'assert-promise';
import mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';

import db from '../../server/src/middlewares/db'
import mockedData from '../mocked-data/data';


let mockgoose = new Mockgoose(mongoose);


before(done => {
  mockgoose.prepareStorage()
    .then(() => {
      mongoose.connect('mongodb://localhost:27017/onlinestore', () => {
        mockedData.init(done);
      });
    })
    .catch(() => {
      throw new Error();
      done();
    });
});

describe('Testing Home Page Middleware functions', () => {
  it('Should be read the products in the DB', (done) => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();

    db.getProducts(req, res)
      .then( data => {
        assert.equal(data.length, 20);
        done();
      })
      .catch( error => {
        console.log(error);
        done();
      });
  });
})