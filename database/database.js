const Sequelize = require("sequelize");
const connection = new Sequelize("projetocurso", "root", "KMario23",{
    host: "localhost",
    dialect: "mysql",
    timezone: "-03:00"
});

module.exports = connection;