const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require("./DataBase/database")
const router = require("./routes/authroute")
const userRouter = require("./routes/userRouter")
const pageRouter = require("./routes/pageroute");
const Page = require('./models/pageModel')
const categoriesRouter = require("./routes/categoriesRoute")
const editProfileRouter = require("./routes/profileEditRouter")
const verifyToken = require("./middleware/verifyToken")

// const User = require("./models/usermodel");

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const PORT = 4000 || process.env.PORT


app.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    })
})
app.get('/api/page/search', async (req, res) => {
    try {
        const { q } = req.query; // q is the query parameter for the category name
        // Find pages with category matching the search query
        const results = await Page.find({ category: { $regex: new RegExp(q, 'i') } });
        res.json(results);
    } catch (error) {
        console.error('Error searching pages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.use("/api/userprofile/edit", editProfileRouter)
app.use('/api/page', pageRouter)
app.use("/api/users", userRouter);
app.use('/api', router)
app.use("/api/categories", categoriesRouter)
connectDB()
app.listen(PORT, () => {
    console.log("Server is runninnnng")
})