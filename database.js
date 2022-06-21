const mongoose = require("mongoose");

const url = `mongodb+srv://Admin:yyzOkjPdh1TZYyZ6@cluster0.mwxuwav.mongodb.net/?retryWrites=true&w=majority`;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
