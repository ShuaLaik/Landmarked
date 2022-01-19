const express = require("express");
const app = express();
const db = require('./config/keys_dev').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require("./routes/api/users");
const trips = require("./routes/api/trips");
const landmarks = require("./routes/api/landmarks");
const entries = require('./routes/api/entries');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
mongoose
  .connect(db, { useNewUrlParser: true })
  // .then(() => console.log("Connected to MongoDB successfully"))
  // .catch(err => console.log(err));

// app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/landmarks", landmarks);
app.use("/api/users", users);
app.use("/api/entries", entries);
app.use("/api/trips", trips);



const port = process.env.PORT || 4500;
app.listen(port, () => (console.log(`Server is running on port ${port}`)));