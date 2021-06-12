module.exports = (sequelize,Sequelize) => {
    const hospitalInfo = sequelize.define('hospitalInfo',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        patientUUID: { 
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4 ,
            references:{
                model: 'Patients',
                key:'id'
            }
        },
        hospitalUUID:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4 ,
            references:{
                model: 'Hospitals',
                key:'id'
            }
        }
    })

    return hospitalInfo
}