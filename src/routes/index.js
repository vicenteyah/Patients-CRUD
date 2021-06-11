const { Router } = require('express')
const api = Router()

const apiPatient = require('./patient.routes')

api.use(apiPatient)

module.exports = api