const TypeRecord = require('../models/typeRecordModel');
const mongoose =require ('mongoose');



const typeRecord_getAll = async (req,res) =>{

   const typeRecords = await TypeRecord.find({}).sort({createAt:-1});

     res.status(200).json(typeRecords);
}

const typeRecord_getById = async (req,res)=>{
    const{id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such typeRecord'});
    }

    const typeRecord = await TypeRecord.findById(id);

    if (!typeRecord){
        return res.status(404).json({error:'No such typeRecord'});
    }

    res.status(200).json(typeRecord);
}

const typeRecord_create = async (req,res) =>{

    const{username, wpm, performance_string, word_bank} = req.body;

    try{
        const typeRecord = await TypeRecord.create({username, wpm, performance_string, word_bank});
        res.status(200).json(typeRecord);
    }catch (error){
        res.status(400).json({error: error.messasge});
    }
}

const typeRecord_delete = async (req, res) =>{
    const {id} = req.params;
    
}

//create a functions for specialized query (like only name and wpm needed)

module.exports = {
    typeRecord_getAll,
    typeRecord_create,
    typeRecord_getById
}