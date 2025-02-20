# Task Tracker CLI

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

**Key Flow Points**:
1. MongoDB connection is established at startup
2. Each command is handled by a separate file
3. Service layer contains all database logic
4. Command handlers deal with user input/output
5. Mongoose handles schema validation and timestamps

**Using it from CLI**:
```bash
# Add task
node index.mjs add <task-description>

# List all tasks
node index.mjs list

# List in-progress tasks
node index.mjs list todo

# List done tasks
node index.mjs list done

# Update task description
node index.mjs update <task-id> <updated-description>

# Delete task
node index.mjs delete <task-id>

# Mark task as in-progress
node index.mjs mark-in-progress <task-id>

# Mark task as done
node index.mjs mark-done <task-id>
```
### To do

- [ ] give simple IDs to tasks so it becomes easier to refer to them
- [ ] if user does not give the contents of the tasks when creating it, you should open up a text editor, then return back to the terminal when the user is done
- [ ] priority flag that is optionally passed
- [ ] due date flag that is optionally passed, can mention the number of days the task is due in
- [ ] listing tasks by priority ( a flag for this as well passed to the list command)
- [ ] listing tasks by due date ( a flag for this as well passed to the list command)