const Categories = require("../models/pageModel");
 
// get all categories
exports.getCategories = (req, res) => {
    Categories.find()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).send({ error: err })
        })
}
 
 
// get the count
exports.getCount = async (req, res) => {
    try {
        const categoriesWithCount = await Categories.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalPages: { $sum: 1 } // Count the total number of pages for each category
                }
            }
        ]);
        res.status(200).json(categoriesWithCount);
    } catch (err) {
        res.status(400).send({ error: err });
    }
};