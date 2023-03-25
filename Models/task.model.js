const {Schema, model} = require('mongoose');

const taskSchema = Schema({
    title:{type:String, required:true},
    category:{type:String, enum:['none', 'bug', 'feature', 'story'], default:'none'},
    assignedTo:{type:String},
    status:{type:String, enum:['pending', 'completed', 'progress']}
})

const TaskModel = model('task', taskSchema);

module.exports = {
    TaskModel
};