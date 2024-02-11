const express = require("express");
const categoriesController = require("../controllers/categoriesController");
const categoriesRouter = express.Router();
 
categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.get("/count", categoriesController.getCount);
 
module.exports = categoriesRouter;