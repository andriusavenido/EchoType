
const ForumPost = require('../models/forumPostModel');
const mongoose =require ('mongoose');



const forumPost_getAll = async (req,res) =>{

   const forumPosts = await ForumPost.find({});

    res.status(200).json(forumPosts);
}
/** 
const forumPost_getById = async (req,res)=>{
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
*/

const forumPost_create = async (req,res) =>{
    
    const{title, body} = req.body;
    console.log(req.body)
    //console.log('helo')
    try{
        
        //console.log('up');
        const userId = req.user._id;
        //console.log('User ID from req.user:', userId); // Debugging log
        const username2 = req.user.username;
        //console.log(username2)
        // Fetch the user object from the database
        
        //console.log('User fetched from database:', username2); // Debugging log
        
        console.log(username2);
        console.log(title);
        console.log(body);

        const forumPost = await ForumPost.create({username: username2, title: title, body: body});
        res.status(200).json(forumPost);
    }catch (error){
        res.status(400).json({error: error.messasge});
        console.log('error here')
    }
}

/** 
const forumPost_delete = async (req, res) =>{
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

*/
//create a functions for specialized query (like only name and wpm needed)

module.exports = {
    forumPost_getAll,
    forumPost_create
    //forumPost_getById,
    //forumPost_delete
}