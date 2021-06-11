require('dotenv').config()
const app = require('./app')
const db = require('./models')
const {appConfig} = require('./config/app.config')

const init = async(appConfig) => {
    try{
       await db.sequelize.sync()
       app.listen(appConfig.port,()=>{
           console.log(`server running at http://${appConfig.host}:${appConfig.port}`)
       })
    }catch (err) {
        console.log(err)
        process.exit(0)
    }
}

init(appConfig)
