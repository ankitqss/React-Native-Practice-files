const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const connection = require("./src/connection");
const authRoutes = require("./src/routes/authRoutes");
const requireAuth = require("./src/middleware/requireAuth");

app.use(express.json());

app.get("/", requireAuth, (req, res) => {
  console.log("first")
  res.send(`Your email: ${req?.user?.email}`);
});

app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
