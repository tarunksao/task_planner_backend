const {Schema, model} = require('mongoose');

const sprintSchema = Schema({
    title:{type:String, required:true},
    tasks:[
        {taskId:{type:Schema.Types.ObjectId, ref:'task'}}
    ]
})

const SprintModel = model('task', sprintSchema);

module.exports = {
    SprintModel
};