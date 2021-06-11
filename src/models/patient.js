
module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define('Patient',{
        id:{
           type: Sequelize.UUID,
           defaultValue: Sequelize.UUIDV4,
           primaryKey: true
        },
        completeName:{
            type: Sequelize.STRING
        },
        age:{
            type: Sequelize.INTEGER()
        },
        gender:{
            type: Sequelize.STRING
        },
        birthDate: {
            type: Sequelize.DATE
        },
        hometown:{
            type: Sequelize.STRING
        }
    })

    return Patient
}