import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    author: String,
    category: String,
    image: String,
    title: String,
    bookLink:String
});
const Book = mongoose.model("Book", bookSchema);

export default Book;