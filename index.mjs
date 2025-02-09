#!/usr/bin/env node
import 'dotenv/config';
import { program } from 'commander';
import { connectDB } from './src/config/db.mjs'; // Assuming .js extension for your db file

// Connect to MongoDB
connectDB();

// Import command handlers
import addTask  from './src/commands/addTask.mjs';
import  listTasks  from './src/commands/listTasks.mjs';
import  updateTask  from './src/commands/updateTask.mjs';
import  deleteTask  from './src/commands/deleteTask.mjs';
import  markTask  from './src/commands/markTask.mjs';

// Add command
program
  .command('add <description>')
  .description('Add a new task')
  .action(addTask);

// List command
program
  .command('list [status]')
  .description('List all tasks or filter by status (todo/in-progress/done)')
  .action(listTasks);

// Update command
program
  .command('update <id> <newDescription>')
  .description('Update a task description')
  .action(updateTask);

// Delete command
program
  .command('delete <id>')
  .description('Delete a task')
  .action(deleteTask);

// Mark in-progress command
program
  .command('mark-in-progress <id>')
  .description('Mark a task as in-progress')
  .action((id) => markTask(id, 'in-progress'));

// Mark done command
program
  .command('mark-done <id>')
  .description('Mark a task as done')
  .action((id) => markTask(id, 'done'));

// Show help if no commands
if (process.argv.length < 3) {
  program.help();
}

// Parse commands
program.parse(process.argv);
