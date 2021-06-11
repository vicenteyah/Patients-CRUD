const db = require('../models')
const Patient = db.Patient

const createPatient = async(req,res) => {
    let payload = req.body
    try {
        const newPatient = await Patient.create(payload)
        res.status(201).send({uuid:newPatient.id, message:'patient created successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).send({message: err.message })
    }
}

const getPatients = async(req, res) => {
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