const mongoose = require('mongoose');
const express = require('express');
const db = require('./schema/db')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

const corsorigin = {
    origin: 'https://database-mern.vercel.app'
}

app.use(cors(corsorigin))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://rkaviyapriya11:kaviyapriya@learnpg.0g2ez.mongodb.net/sampledata')
    .then(() => {
        console.log('DB is connected');
    })
    .catch(() => {
        console.log('connection err');
    })

app.post('/crt', async (req, res) => {
    // console.log(req.body);
    
    const data = await db.create({
        Name: req.body.Name
    })
    res.send(data)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})


