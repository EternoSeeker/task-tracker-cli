import { updateTaskStatus } from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const markTask = async (id, newStatus) => {
  try {
    const task = await updateTaskStatus(id, newStatus);
    console.log(`Task marked successfully (ID: ${task._id}, Status: ${task.status})`);
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error marking task: ', error.message);
    process.exit(1);
  }
};

export default markTask;
