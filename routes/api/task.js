const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Bringing task model
const Task = require("../../models/task");

// @route GET api/tasks
// @desc Geall all tasks
// @access
router.get("/", (req, res) => {
  // fetch all the items in the database.
  Task.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// private
router.post("/", auth, (req, res) => {
  const newTask = new Task({
    username: req.body.username,
    description: req.body.description
  });
  newTask.save().then(task => res.json(task));
});

// @route DELETE api/items/:id
// @desc Delete a task
// @access private
router.delete("/:id", auth, (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({ success: true })))
    .catch(err => res.statsu(404).json({ success: false }));
});

module.exports = router;
