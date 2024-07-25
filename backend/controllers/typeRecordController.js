const TypeRecord = require('../models/typeRecordModel');
const mongoose =require ('mongoose');


const typeRecord_getAll = async (req,res) =>{
  const typeRecords = await TypeRecord.find({}).sort({createAt:-1});

    res.status(200).json(typeRecords);
}

const typeRecord_create = async (req,res) =>{
    const{username, wpm, performance_string, word_bank} = req.body;

    try{
        const typeRecord = await TypeRecord.create({username, wpm, performance_string, word_bank})
        res.status(200).json(typeRecord);
    }catch (error){
        res.status(400).json({error: error.messasge});
    }
}

//create a functions for specialized query (like only name and wpm needed)

module.exports = {
    typeRecord_getAll,
    typeRecord_create
}