const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const apiSources = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/v1',apiSources)

module.exports = app