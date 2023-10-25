import Sequelize from "sequelize";
import db from "../config/db.js";

const Post = db.define('post', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contenido: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

export default Post;