const { Router } = require('express')
const api = Router()
const controller = require('../controller/patient.controller')

api.post('/patient',controller.createPatient)
api.get('/patients',controller.getPatients)

module.exports =  api