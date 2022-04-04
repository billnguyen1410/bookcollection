const express = require('express');
const app = express();
const port = 4700;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

app.use (bodyParser.urlencoded({extended:true}));
app.use(cors("*"));

mongoose.connect("mongodb://localhost:27017/bookDB", {
    useNewUrlParser: true,
})

// Blueprint / structure how we save data to database
// Schema
const bookSchema = new mongoose.Schema({
    title: String,
    category: String,
    isbn: Number, 
})
// use Schema to create mongoose model. 
const BookItem = mongoose.model("Bookitem", bookSchema);


app.route("/")
.get((req, res) => {
    BookItem.find((err, foundBookItem) => {
        if(!err){
            res.send(foundBookItem);
        }else{
            res.send(err);
        }
    })
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})