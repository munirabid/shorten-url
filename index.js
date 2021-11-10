const express = require("express");
const cors = require("cors");
const app = express();
require("./db/db.config");
// Routes Config
app.use(
  express.json({
    extended: false,
  })
);
var corsOptions = {
  optionsSuccessStatus: 200,
  methods: "GET, POST",
};

app.use(cors(corsOptions));

//parse incoming request body in JSON format.
app.use("/", require("./routes/redirect"));
app.use("/api/url", require("./routes/url"));

//Listen for incoming requests
const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
