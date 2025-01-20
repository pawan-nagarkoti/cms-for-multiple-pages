require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectToDB = require("./database/db");
const landingPageRoute = require("./routes/landing-page");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve images
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// database
connectToDB();

// routes
app.use("/landing-page", landingPageRoute);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
