module.exports = (sequelize,Sequelize) =>{
    const Tutor = sequelize.define('Tutors',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        tutorName:{ type: Sequelize.STRING },
        tutorPhone:{ type: Sequelize.INTEGER(10) }
    })
    return Tutor
}