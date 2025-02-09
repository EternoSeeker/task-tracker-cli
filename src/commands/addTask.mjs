import {createTask} from '../services/taskService.mjs';
import { disconnectDB } from '../config/db.mjs';

const addTask = async (description) => {
    try {
        const task = await createTask(description);
        console.log(`Task added successfully (ID: ${task._id})`);
        await disconnectDB();
        process.exit(0);
    } catch (error) {
        console.error('Error adding task: ', error.message);
        process.exit(1);
    }
};

export default addTask;