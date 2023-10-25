import { Sequelize } from "sequelize";

// nombre db, user, pass
const db = new Sequelize('clase', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    define:{
        timestamps: true
    }
})

// db.sync()
db.sync({alter: true})
// db.sync({force: true})

export default db;