const db = require('../models')
const hospitalInfo = db.hospitalInfo

const createInfo = async(req,res) => {
    let payload = req.body
    try {
        const info = await hospitalInfo.create(payload)
        res.status(201).send({dataInfo: info})
    } catch (error) {
        res.status(500).send({message: 'something went wrong'})
    }
}

const getInfoById = async(req,res) => {
    try {
        const infObtained = await hospitalInfo.findOne({ where:{ id:req.params.id } })
        if(infObtained != null)res.status(201).send({data:infObtained})
        res.status(404).send({message:'info not found'})
    } catch (error) {
        console.log(error)
    }
}

const updateInfo = async(req,res)=> {
    let payload = req.body
    try{
       const infoUpdated = await hospitalInfo.update(payload,{ where:{ id:req.params.id } })
       if(infoUpdated != null) res.status(200).send('rows updated successfully')
       res.status(404).send({message:'info not found'})
    }catch(error){
        console.log(error)
    }
}

const deleteInfo = async(req,res) => {
    try {
        const infoDeleted = await hospitalInfo.destroy({where:{id:req.params.id}})
        if(infoDeleted != null) res.status(200).send({message:'info deleted successfully'})
        res.status(404).send({message:'info not found'})
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