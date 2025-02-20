import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskId: {
    type: Number,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  status: {
    type: String,
    enum: ["todo", "in-progress", "done"],
    default: "todo",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const counterSchema = new mongoose.Schema({
  id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model("counter", counterSchema);

taskSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { id: "taskId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      this.taskId = counter.seq;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

export default mongoose.model("Task", taskSchema);
