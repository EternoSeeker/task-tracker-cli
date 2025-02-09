import { updateTaskDescription } from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const updateTask = async (id, newDescription) => {
  try {
    const task = await updateTaskDescription(id, newDescription);
    console.log(`Task updated successfully (ID: ${task._id}, Description: ${task.description})`);
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error updating task: ', error.message);
    process.exit(1);
  }
};

export default updateTask;
