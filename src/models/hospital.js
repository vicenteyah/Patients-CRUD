module.exports = (sequelize, Sequelize) =>{
    const Hospital = sequelize.define('Hospitals',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        enrollmentDate: { type: Sequelize.DATE },
        hospitalSource: { type: Sequelize.STRING }
    })

    return Hospital
}