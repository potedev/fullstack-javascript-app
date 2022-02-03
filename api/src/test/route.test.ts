//Test d'intégration & End to End

import { createServer } from '../server'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
  app = await createServer();
});

describe('GET /', function () {
  it('responds with json', function async(done) {
    request(app)
      .get('/api/v1/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({message:'Hello CPROM'})
        done();
    });
  });
});