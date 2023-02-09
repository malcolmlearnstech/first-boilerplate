const db = require('./database');

const User = require('./models/user');
const Task = require('./models/task');

User.hasMany(Task);
Task.belongsTo(User);

module.exports = { db, User, Task };
