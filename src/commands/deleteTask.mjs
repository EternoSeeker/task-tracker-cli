import { deleteTask } from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const deleteTaskHandler = async (taskId) => {
  try {
    const task = await deleteTask(id);
    if (task) {
      console.log(`Task deleted successfully (ID: ${task.taskId})`);
    } else {
      console.log(`Task with ID ${taskId} not found`);
    }
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error deleting task: ', error.message);
    process.exit(1);
  }
};

export default deleteTaskHandler;
