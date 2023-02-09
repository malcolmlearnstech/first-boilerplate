// says that our sequelize instance is created in 'database.js'
const db = require('./db/database');

// the server that was created and used as the previous entry point is 'app.js'
const app = require('./app');
const port = process.env.PORT || 3000;

db.sync() // this portion is responsible for syncing our database
  .then(function () {
    console.log('Knock, knock');
    console.log("Who's there?");

    // this part of the function listens with our express server once we have synced
    app.listen(port, () =>
      console.log(`Your server, listening on port ${port}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
