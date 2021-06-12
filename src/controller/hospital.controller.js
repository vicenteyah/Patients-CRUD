const db = require('../models')
const Hospital = db.Hospital

const createHospital = async(req,res) => {
    let payload = req.body
    try {
        const newHospital = await Hospital.create(payload)
        res.status(201).send({ uuid:newHospital.id ,})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const getHospitalById = async(req,res) => {
   try {
       const hospital = await Hospital.findOne({ where: { id: req.params.id } })
       if(hospital != null) res.status(200).send({hospitalData:hospital})
       res.status(404).send({message:'hospital not found'})
   } catch (error) {
       console.log(error.message)
   }
}

const updateHospital = async(req,res) => {
    let payload = req.body
    try {
        const hospitalUpdated = await Hospital.update(payload,{ where: { id: req.params.id } })
        if(hospitalUpdated != null) res.status(200).send({ data:hospitalUpdated,message:'rows updated successfully'})
        res.status(404).send({message:'hospital not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const deleteHospital = async(req,res) => {
    try{
        const hospitalDeleted = await Hospital.destroy({ where: { id: req.params.id } })
        if(hospitalDeleted != null) res.status(200).send({message:'hospital deleted successfully',data:hospitalDeleted})
        res.status(404).send({message:'patient not found'})
    }catch (eroor){

    }
}

module.exports ={
    createHospital,
    getHospitalById,
    updateHospital,
    deleteHospital
}