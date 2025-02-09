import Task from '../models/task.mjs'; // Import Task with the .js extension

// Create
export const createTask = async (description) => {
  return await Task.create({ description });
};

// Read
export const getAllTasks = async (status) => {
  const query = status ? { status } : {};
  return await Task.find(query).sort({ createdAt: -1 });
};

// Update Description
export const updateTaskDescription = async (id, newDescription) => {
  return await Task.findByIdAndUpdate(
    id,
    { description: newDescription, updatedAt: Date.now() },
    { new: true }
  );
};

// Update Status
export const updateTaskStatus = async (id, newStatus) => {
  if (!['todo', 'in-progress', 'done'].includes(newStatus)) {
    throw new Error('Invalid status');
  }
  
  return await Task.findByIdAndUpdate(
    id,
    { status: newStatus, updatedAt: Date.now() },
    { new: true }
  );
};

// Delete
export const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
