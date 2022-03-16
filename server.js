const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// FYI .sync() means that sequelize is taking the models and connecting them to their associated tables in the db. if it doesn't find a table it creates one.
// FYI force:true means that the db tables will be dropped and re-created on startup.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
