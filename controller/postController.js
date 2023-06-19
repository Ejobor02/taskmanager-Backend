const TASK = require("../model/postModel.js");

//creating task
const create_task = async (req, res) => {
  const Task = new TASK({
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    author: req.body.author,
  });
  try {
    const savedTask = await Task.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// getting all tasks
const get_all_task = async (req, res) => {
  const getAllTask = await TASK.find();
  try {
    res.json(getAllTask);
    console.log(getAllTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

//Getting Specific task
const get_specific_task = async (req, res) => {
  try {
    const specificTask = await POSTS.findById(req.params.postId);
    res.json(specificTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

// Delete Task
const delete_task = async (req, res) => {
  try {
    const deleteTask = await TASK.findByIdAndDelete({ _id: req.params.postId });
    res.json(deleteTask);
    console.log(deleteTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};
const update_task = async (req, res) => {
  try {
    const updateTask = await POSTS.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updateTask);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

module.exports = {
  create_task,
  get_all_task,
  get_specific_task,
  delete_task,
  update_task,
};
