const express = require("express");
const router = express.Router();

// Bringing task model
const Task = require("../../models/task");

// @route GET api/tasks
// @desc Geall all tasks
// @access public
router.get("/", (req, res) => {
  // fetch all the items in the database.
  Task.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const newTask = new Task({
    username: req.body.username,
    description: req.body.description
  });
  newTask.save().then(task => res.json(task));
});

// @route DELETE api/items/:id
// @desc Delete a task
// @access public
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => task.remove().then(() => res.json({ success: true })))
    .catch(err => res.statsu(404).json({ success: false }));
});

module.exports = router;
