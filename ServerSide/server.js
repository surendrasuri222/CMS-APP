const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require("./DataBase/database")
const router = require("./routes/authroute")
const userRouter = require("./routes/userRouter")
const pageRouter = require("./routes/pageroute");
const Page = require('./models/pageModel')
// const User = require("./models/usermodel");

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000 || process.env.PORT


app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    })
})


app.use('/api/page', pageRouter)
app.use("/api/users", userRouter);
app.use('/api', router)
connectDB()
app.listen(PORT, () => {
    console.log("Server is runninnnng")
})

