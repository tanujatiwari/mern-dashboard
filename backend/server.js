const express = require("express")
const cors = require("cors")
const mongoose = require('mongoose')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connection established")
    })
    .catch(err => {
        console.log("Database connection error...");
        console.log(err);
    });

const dashboardRoutes = require('./routes/dashboard')
const apiData = require('./routes/api')

app.use('/dashboard', dashboardRoutes)
app.use('/api', apiData)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})