const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT, DB_SYNC } = require("../src/config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");
const app = express();

async function setUpAndStartServer() {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    if (DB_SYNC) {
      await db.sequelize.sync({ alter: true });
    }
    console.log(`Server is listening at the port ${PORT}`);
  });
}
setUpAndStartServer();
