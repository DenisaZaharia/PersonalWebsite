const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); //serve public folder as a static folder

mongoose.connect(
  "mongodb+srv://denisazaharia17:Zaharia04@personalportfolio.atnjyjf.mongodb.net/projectsDescription?retryWrites=true&w=majority"
);
//create a data schema

const notesSchema = {
  title: String,
  content: String
};
const Note = mongoose.model("Note", notesSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  newNote.save();
  res.redirect("/");
});
//app.post
app.listen(3000, function () {
  console.log("server is running on 3000");
});
