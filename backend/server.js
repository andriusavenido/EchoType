require('dotenv').config();

//express app
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db_URI = process.env.DB_URI;

const typeRecordRoutes =require('./routes/typeRecords')

//middleware
app.use(express.json());

//log req
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})
//routes
app.use('/api/typeRecords',typeRecordRoutes);

//db connection
mongoose.connect(db_URI)
    .then(() =>{
        app.listen(process.env.PORT, ()=>{
            console.log('Connected to DB, listening on port', process.env.PORT);
        });
    })
    .catch((error) =>{
        console.log(error); 
    })