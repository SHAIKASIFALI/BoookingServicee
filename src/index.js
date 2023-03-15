const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, DB_SYNC } = require("../src/config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");
const app = express();
const { createChannel } = require("./utils/messageQueue");
var channel;
async function setUpAndStartServer() {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/bookingservice/api", apiRoutes);
  // create a message broker channel
  channel = await createChannel();
  app.listen(PORT, async () => {
    if (DB_SYNC) {
      await db.sequelize.sync({ alter: true });
    }
    console.log(`Server is listening at the port ${PORT}`);
  });
  console.log(`this is from index.js `, channel);
}
setUpAndStartServer();
module.exports = channel;
