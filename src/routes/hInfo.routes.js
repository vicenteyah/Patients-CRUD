const { Router } = require('express')
const api = Router()
const controller = require('../controller/hospitalInfo')

api.post('/hospital/info',controller.createInfo)
api.get('/hospital/info/:id',controller.getInfoById)
api.put('/hospital/info/:id',controller.updateInfo)
api.delete('/hospital/info/:id',controller.deleteInfo)


module.exports = api