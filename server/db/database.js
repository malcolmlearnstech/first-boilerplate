const Sequelize = require('sequelize');
const pkg = require('../../package.json');

//lines 5 and 8 are arranged to input the name of the database for your new project by dynamically accessing the project name in your package.json file; its best practice to make sure that your project name and database name exactly match
const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}_test` : pkg.name;
console.log(`Opening database connection to ${dbName}`);

const db = new Sequelize(`postgres://localhost:5432/${dbName}`, {
  logging: false,
});

module.exports = db;
