const { describe, it } = require('mocha')
const request = require('supertest')
const app = require('../app')

describe('POST /v1/Patient', ()=>{
    it('respond with json 201 created', done => {
        const data = {
            completeName: 'vicente Yah',
            age: 27,
            gender: 'Masculino',
            birthDate: '1994-02-22',
            hometown: 'Nuevo Laredo Tamaulipas'
        }
        request(app)
           .post('/v1/patient')
           .send(data)
           .set('Accept','application/json')
           .expect('Content-Type', /json/)
           .expect(201)
           .end( err => {
               if(err) done(err)
               done()
           })
    })
})



describe('POST /v1/tutor', ()=>{
    it('respond with json 201 created', done => {
        const data = {
            tutorName: 'vicente Yah',
            tutorPhone: 99910714,
        }
        request(app)
           .post('/v1/tutor')
           .send(data)
           .set('Accept','application/json')
           .expect('Content-Type', /json/)
           .expect(201)
           .end( err => {
               if(err) done(err)
               done()
           })
    })
})

describe('POST /v1/hospital', ()=>{
    it('respond with json 201 created', done => {
        const data = {
            enrollmentDate: '2019-08-21',
            hospitalSource: 'Hospital Juarez'
        }
        request(app)
           .post('/v1/hospital')
           .send(data)
           .set('Accept','application/json')
           .expect('Content-Type', /json/)
           .expect(201)
           .end( err => {
               if(err) done(err)
               done()
           })
    })
})

describe('GET /v1/patients', ()=>{
    it('respond with json a lis of patients', done => {
        request(app)
        .get('/v1/patients')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        done()
    })
})