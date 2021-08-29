const express = require("express");
const app = express();
const userRoutes = require("./route");

const PORT = process.env.PORT || 5000

// parse json request body
app.use(express.json());

app.use("/api", userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})