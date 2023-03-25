const express = require('express');
const { TaskModel } = require('../Models/task.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req, res) => {
    try{
        let allTasks = await TaskModel.find();
        if (allTasks.length>0) {
            res.status(200).send({message:'Here is the list of all the Tasks', allTasks});
        } else {
            res.send({message:'Sorry!!! We do not have any tasks, Please add one'});
        }
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.post('/', async (req,res) => {
    const payload = req.body;
    try {
        const newTask = new TaskModel(payload);
        await newTask.save();
        res.status(201).send({message:'Task Created Successfully', newTask});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
})

module.exports = app;