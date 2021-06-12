const db = require('../models')
const Patient = db.Patient

const createPatient = async(req,res) => {
    let payload = req.body
    try {
        const newPatient = await Patient.create(payload)
        res.status(201).send({uuid:newPatient.id, message:'patient created successfully'})
    } catch (error) {
        res.status(500).send({message: error.message })
    }
}

const getPatients = async(req, res) => {
    try {
        const patients = await Patient.findAll()
       if(patients != null) res.status(200).send({patients:patients})
       res.status(404).send({message:'patients not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const getPatientById = async (req,res) => {
    try{
       const patient = await Patient.findOne({ where:{ id:req.params.id } })
       if(patient != null) res.status(200).send({patientData:patient})
       res.status(404).send({message:'patient not found'})
    }catch(error){
       console.log(error.message)
    }
}

const updatePatient =  async(req,res) =>{
    let payload = req.body
    try {
        const patientUpdated = await Patient.update(payload,{ where:{ id:req.params.id } })
        if(patientUpdated != null) res.status(200).send({data:patientUpdated, message:'rows updated successfully' })
        res.status(404).send({message:'patient not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const deletePatient = async(req,res) => {
    try {
        const patientDeleted = await Patient.destroy({ where: { id: req.params.id } })
        if(patientDeleted != null) res.status(200).send({message:'patient deleted successfully'})
        res.status(404).send({message:'patient not found'})
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={
    createPatient,
    getPatients,
    getPatientById,
    updatePatient,
    deletePatient
}