import Task from "../models/task.model.js";
import axios from "axios";

export const createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (req.body.status === "completed") {
    await axios.post(process.env.N8N_WEBHOOK_URL, {
      taskTitle: task.title,
      userId: task.userId
    });
  }

  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
