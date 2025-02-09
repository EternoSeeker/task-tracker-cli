import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'done'],
        default: 'todo'
    },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
});

export default mongoose.model('Task', taskSchema);