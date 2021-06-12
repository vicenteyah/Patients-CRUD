const db = require('../models')
const tutorInfo = db.tutorInfo

const createInfo = async(req,res)=>{
    let payload = req.body
    try {
        const info = await tutorInfo.create(payload)
        if(info != null) res.status(200).send({uuid:info.id,message:'tutor information created successfully'})
    } catch (error) {
        res.status(500).send({message:'Something went wrong'})
    }
}

const getInfoById = async(req,res)=> {
    try{
       const infoObtained = await tutorInfo.findOne({ where:{id:req.params.id}})
       if(infoObtained != null) res.status(200).send({data:infoObtained})
       res.status(404).send({message:'information not found'})
    }catch(error){
        console.log(`error message ${error}`)
    }
}

const updateInfo = async(req,res) => {
    let payload = req.body
    try{
        const infoUpdated = await tutorInfo.update(payload,{ where:{id:req.params.id}})
        if(infoUpdated  != null) res.status(200).send({message:'rows updated successfully'})
        res.status(404).send({message:'information not found'})
    }catch(error){
        console.log(error)
    }
}

const deleteInfo = async(req,res) => {
    try {
        const infoDeleted = await tutorInfo.destroy({ where:{ id:req.params.id } })
        if(infoDeleted != null) res.status(200).send({message:'information deleted successfully'})
        res.status(404).send({message:'information not found'})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createInfo,
    getInfoById,
    updateInfo,
    deleteInfo
}