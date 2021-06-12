const { Router } = require('express')
const api = Router()
const controller = require('../controller/tutor.controller')

api.post('/tutor', controller.createTutor)
api.get('/tutors',controller.getTutors)
api.get('/tutor/:id', controller.getTutorById)
api.put('/tutor/:id',controller.updateTutor)
api.put('/tutor/:id',controller.deleteTutor)

module.exports = api