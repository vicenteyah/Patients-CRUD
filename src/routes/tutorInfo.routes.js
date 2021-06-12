const { Router } = require('express')
const api = Router()
const controller = require('../controller/tutorInfo')

api.post('/tutor/info', controller.createInfo)
api.get('/tutor/info/:id',controller.getInfoById)
api.put('/tutor/info/:id',controller.updateInfo)
api.delete('/tutor/info/:id',controller.deleteInfo)

module.exports = api
