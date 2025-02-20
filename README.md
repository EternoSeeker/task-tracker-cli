# Task Tracker CLI

A command-line application designed to help you manage your daily tasks with ease. Built with Node.js and MongoDB, this tool allows you to add, list, update, delete, and mark tasks as either "in-progress" or "done" directly from your terminal.

**Directory Structure**:
```
task-tracker-cli/
├── src/
│   ├── commands/
│   │   ├── addTask.mjs
│   │   ├── listTasks.mjs
│   │   ├── updateTask.mjs
│   │   ├── deleteTask.mjs
│   │   └── markTask.mjs
│   ├── config/
│   │   └── db.mjs
│   ├── models/
│   │   └── Task.mjs
│   └── services/
│       └── taskService.mjs
├── index.mjs
├── package.json
├── .env
└── README.md
```

**Setup Steps**:
1. Install dependencies:
```bash
npm install mongoose commander dotenv
```

2. Create `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/task-tracker
```

3. Make it executable (if needed):
```bash
chmod +x index.mjs
```

**Using it from CLI**:
```bash
# Add task
node index.mjs add <task-description>

# List all tasks
node index.mjs list

# List task by it's status
node index.mjs list <todo|in-progress|done>

# Mark task as in-progress
node index.mjs mark-in-progress <task-id>

# Mark task as done
node index.mjs mark-done <task-id>

# Update task description
node index.mjs update <task-id> <updated-description>

# Delete task
node index.mjs delete <task-id>

# Get help
node index.mjs [--help|-h]

# Get help for a particular command
node index.mjs <command> <--help|-h>
```