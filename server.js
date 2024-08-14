const app = require("./app.js");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util.js");

// Start server
async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Cannot connect to database!", error);
    process.exit();
  }
}

startServer();

// const PORT = config.app.port;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
