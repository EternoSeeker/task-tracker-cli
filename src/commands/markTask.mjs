import { updateTaskStatus } from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const markTask = async (taskId, newStatus) => {
  try {
    const task = await updateTaskStatus(taskId, newStatus);
    console.log(`Task marked successfully (ID: ${task.taskId}, Status: ${task.status})`);
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error marking task: ', error.message);
    process.exit(1);
  }
};

export default markTask;
