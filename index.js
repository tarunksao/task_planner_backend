require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;

const app = express();
app.use(cors());

app.get('/', (req,res) => {
    res.send('Welcome to Task Planner Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port:- ${PORT}`);
})