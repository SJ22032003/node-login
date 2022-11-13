const express = require("express");
const cors = require("cors");
const port = 8000;

const app = express();

// Parse incoming requests data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware
app.use(cors());

//Routes
app.use("/api", require("./routes/LoginRoute"));

//Error 404
app.use((req, res, next) => {
  res.status(404).json({ error: "404 Not Found" }).end();
  return;
});

//Listen
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
