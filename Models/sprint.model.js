const {Schema, model} = require('mongoose');

const sprintSchema = Schema({
    title:{type:String, required:true},
    tasks:{type:[Schema.Types.ObjectId], ref:'task'}
})

const SprintModel = model('sprint', sprintSchema);

module.exports = {
    SprintModel
};