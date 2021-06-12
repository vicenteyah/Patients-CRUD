const { Router } = require('express')
const api = Router()
const controller = require('../controller/patient.controller')

api.post('/patient',controller.createPatient)
api.get('/patients',controller.getPatients)
api.get('/patient/:id',controller.getPatientById)
api.put('/patient/:id',controller.updatePatient)
api.delete('/patient/:id', controller.deletePatient)

module.exports =  api