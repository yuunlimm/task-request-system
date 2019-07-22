const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const tasks = require("./routes/api/task");
const users = require("./routes/api/user");
const auth = require("./routes/api/auth");
const config = require("config");
const app = express();

// Bodyparser need middleware peice
app.use(express.json());

// Db config
const db = config.get("mongoURI");

// connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/tasks", tasks);
app.use("/api/users", users);
app.use("/api/auth", auth);

// Serve Static assets if in prodution.
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    // load that up to index.html
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
