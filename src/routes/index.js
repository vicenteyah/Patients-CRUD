const { Router } = require('express')
const api = Router()

const apiPatient = require('./patient.routes')
const apiTutor = require('./tutor.routes')
const apiHospital = require('./hospital.routes')
const apiHospitalInfo = require('./hInfo.routes')
const apiTutorInfo = require('./tutorInfo.routes')

api.use(apiPatient)
api.use(apiTutor)
api.use(apiHospital)
api.use(apiHospitalInfo)
api.use(apiTutorInfo)

module.exports = api