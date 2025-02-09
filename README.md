# Task Tracker CLI

**Directory Structure**:
```
task-tracker-cli/
├── src/
│   ├── commands/
│   │   ├── addTask.js
│   │   ├── listTasks.js
│   │   ├── updateTask.js
│   │   ├── deleteTask.js
│   │   └── markTask.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Task.js
│   └── services/
│       └── taskService.js
├── index.js
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

3. Make it executable:
```bash
chmod +x index.js
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
node index.mjs add "Complete project report"

# List all tasks
node index.mjs list

# List done tasks
node index.mjs list done

# Update task description
node index.mjs update 507f1f77bcf86cd799439011 "Updated description"

# Delete task
node index.mjs delete 507f1f77bcf86cd799439011

# Mark task as in-progress
node index.mjs mark-in-progress 507f1f77bcf86cd799439011

# Mark task as done
node index.mjs mark-done 507f1f77bcf86cd799439011
```
### To do

- [ ] if user does not give the contents of the tasks when creating it, you should open up a text editor like git does
- [ ] priority flag that is optional
- [ ] due date flag that is optional 