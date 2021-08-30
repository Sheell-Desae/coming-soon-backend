const express = require("express");
const app = express();
const cors = require('cors');
const userRoutes = require("./route");



const PORT = process.env.PORT || 5000

// enable cors
app.use(cors());
app.options("*", cors());

// parse json request body
app.use(express.json());

app.use(cors());

app.use("/api", userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})