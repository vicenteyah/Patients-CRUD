const { Router } = require('express')
const api = Router()

const apiPatient = require('./patient.routes')
const apiTutor = require('./tutor.routes')
const apiHospital = require('./hospital.routes')

api.use(apiPatient)
api.use(apiTutor)
api.use(apiHospital)

module.exports = api