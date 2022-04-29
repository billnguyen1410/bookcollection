const express = require('express');
const app = express();
const port = 4700;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));
// receive data from client-side
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/bookDB", {
    useNewUrlParser: true,
})

// Blueprint / structure how we save data to database
// Schema
const bookSchema = new mongoose.Schema({
    title: String,
    category: String,
    isbn: Number, // should validate because number.
})
// use Schema to create mongoose model. 
const BookItem = mongoose.model("Bookitem", bookSchema);


app.route("/")
    // Require method to find data in database.
    .get((req, res) => {
        BookItem.find((err, foundBookItem) => {
            if (!err) {
                res.send(foundBookItem);
            } else {
                res.send(err);
            }
        })
    })
    // require method to add new book item into database.
    .post((req, res) => {
        const addBook = req.body;
        BookItem.create({
            ...addBook
        },
            function (err, addedNewBook) {
                if (addedNewBook) {
                    res.send(true);
                } else {
                    res.send(false);
                }
            })
    })
    // require method to delete book.
    .delete((req, res) => {
        const deleteItem = req.body._id;
        BookItem.findOneAndRemove({
            _id: deleteItem
        }, function (err, deletedItem) {
            if (deletedItem) {
                res.send(true);
            } else {
                res.send(false);
            }
        })
    })


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})