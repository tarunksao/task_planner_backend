const express = require('express');
const { SprintModel } = require('../Models/sprint.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req, res) => {
    try{
        let allSprints = await SprintModel.find().populate('tasks');
        if (allSprints.length>0) {
            res.status(200).send({message:'Here is the list of all the Sprints', allSprints});
        } else {
            res.send({message:'Sorry!!! We do not have any Sprints, Please add one'});
        }
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.post('/', async (req,res) => {
    const payload = req.body;
    try {
        const newSprint = new SprintModel(payload);
        await newSprint.save();
        res.status(201).send({message:'Sprint Created Successfully', newSprint});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.patch('/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;

    try{
        const updateSprint = await SprintModel.findByIdAndUpdate({_id:id}, payload);
        res.status(204).send({message:`Sprint with ID:- ${id} has been updated`});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.delete('/:id', async (req,res) => {
    const {id} = req.params;

    try{
        const deleteSprint = await SprintModel.findByIdAndDelete({_id:id});
        res.status(202).send({message:`Sprint with ID:- ${id} has been deleted`});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

module.exports = app;