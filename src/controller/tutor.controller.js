const db = require('../models')
const Tutor = db.Tutor

const createTutor = async(req,res) => {
    let payload = req.body
    try {
        const newTutor = await Tutor.create(payload)
        res.status(201).send({uuid:newTutor.id, message:'tutor created successfully'})
    } catch (error) {
        res.status(500).send({message:'internal server error'})
    }
}

const getTutors =  async(req,res) => {
    try {
        const tutors = await Tutor.findAll()
        if(tutors != null) res.status(200).send({tutors:tutors})
        res.status(404).send({message:'tutors not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const getTutorById = async(req,res) => {
    try {
        const tutor = await Tutor.findOne({ where: { id: req.params.id } })
        if(tutor != null)res.status(200).send({tutordata:tutor})
        res.status(404).send({message:'tutor not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const updateTutor = async(req,res) => {
    let payload = req.body
    try {
        const tutorUpdated = await Tutor.update(payload,{ where: { id: req.params.id } })
        if(tutorUpdated != null) res.status(200).send({data:tutorUpdated, message:'rows updated successfully'})
        res.status(404).send({message:'tutor not found'})
    } catch (error) {
        console.log(error.message)
    }
}

const deleteTutor = async(req,res) => {
    try {
        const tutorDeleted = await Tutor.destroy({ where: { id: req.params.id } })
       if(tutorDeleted != null) res.status(200).send({message:'tutor deleted successfully'})
       res.status(404).send({message:'tutor not found'})
    } catch (error) {
       console.log(error.message)
    }
}

module.exports = {
    createTutor,
    getTutors,
    getTutorById,
    updateTutor,
    deleteTutor
}