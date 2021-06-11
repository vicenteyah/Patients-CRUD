const db = require('../models')
const Patient = db.Patient

async function createPatient(req,res){
    let payload = req.body
    try {
        const newPatient = await Patient.create(payload)
        res.status(201).send({user:newPatient, message:'patient created successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: err.message })
    }
}

async function getPatients(req, res){
    try {
        const patients = await Patient.findAll()
        res.status(200).send({patients:patients})
    } catch (error) {
        res.status(404).send({message:'patients not found'})
    }
}

module.exports ={
    createPatient,
    getPatients
}