import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";

const User = db.define('user', {
    // id:{
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    // id:{
        // adfznjcsdayfc9iwQMUDO 
    //     type: DataTypes.UUID,
    //     defaultValue: DataTypes.UUIDV4
    // }
    nombre: {
        // type: Sequelize.STRING,
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue:
        // primaryKey: true
        // autoIncrement: true
        // unique: true
        // field: "primer_nombre"
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        get(){
            const rawValue = this.getDataValue('apellido');
            return rawValue ? rawValue.toUpperCase() : null;
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
            this.setDataValue('password', `hashed_pass: ${value}`)
        }
    },
}, {
    updatedAt: false,
    // freezeTableName: true
    // tableName: "otro_nombre"
    paranoid: true
})

export default User;