const TypeRecord = require('../models/typeRecordModel');
const mongoose =require ('mongoose');



const typeRecord_getAll = async (req,res) =>{
    const user_id = req.user._id;

   const typeRecords = await TypeRecord.find({ user_id }).sort({createAt:-1});

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
        const user_id = req.user._id;
        const typeRecord = await TypeRecord.create({username, user_id, wpm, performance_string, word_bank});
        res.status(200).json(typeRecord);
    }catch (error){
        res.status(400).json({error: error.messasge});
    }
}

const typeRecord_delete = async (req, res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Record Exists'});
    }
    
    const typeRecord = await TypeRecord.findOneAndDelete({_id:id});

    if (!typeRecord){
        return res.status(400).json({error: 'No Record Exists'});
    }
    
    res.status(200).json(typeRecord);
}

const typeRecord_update = async (req, res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Record Exists'});
    }
    
    const typeRecord = await TypeRecord.findOneAndUpdate({_id:id},
        { ...req.body});

    if (!typeRecord){
        return res.status(400).json({error: 'No Record Exists'});
    }
    
    res.status(200).json(typeRecord);
}

const typeRecord_getLeaderboard = async (req, res) =>{
    const leaderboard = await TypeRecord.find({}).sort({wpm:-1}).limit(10);

    res.status(200).json(leaderboard);
}

//create a functions for specialized query (like only name and wpm needed)

module.exports = {
    typeRecord_getAll,
    typeRecord_create,
    typeRecord_getById,
    typeRecord_delete,
    typeRecord_update,
    typeRecord_getLeaderboard
}