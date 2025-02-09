import { getAllTasks } from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const listTasks = async (status) => {
  try {
    const tasks = await getAllTasks(status);
    if (tasks.length === 0) {
      console.log('No tasks found');
    } else {
      console.log('Tasks retrieved successfully:');
      tasks.forEach(task => {
        console.log(`ID: ${task._id}, Description: ${task.description}, Status: ${task.status}`);
      });
    }
    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('Error listing tasks: ', error.message);
    process.exit(1);
  }
};

export default listTasks;
