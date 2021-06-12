const { Router } = require('express')
const api = Router()
const controller = require('../controller/hospital.controller')

api.post('/hospital',controller.createHospital)
api.get('/hospital/:id',controller.getHospitalById)
api.put('/hospital/:id',controller.updateHospital)
api.delete('/hospital/:id',controller.deleteHospital)

module.exports = api