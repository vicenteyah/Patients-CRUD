module.exports = (sequelize,Sequelize) => {
    const tutorInfo = sequelize.define('tutorInfo',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        patientUUID:{
            type:Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references:{
                model:'Patients',
                key:'id'
            }
        },
        tutorUUID:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            references:{
                model:'Tutors',
                key:'id'
            }
        }
    })

    return tutorInfo
}