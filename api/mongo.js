const mongoose = require("mongoose");
const {DB_PASSWORD} = require("./credenciales")


const connectionString = `mongodb+srv://edwardbarrero:${DB_PASSWORD}@cluster0.ksupa.mongodb.net/edwardDB?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

