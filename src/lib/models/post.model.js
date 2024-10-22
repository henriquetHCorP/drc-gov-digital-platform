import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    text:{
        type:String, 
        required: true, 
    }, 
    image: {
        type: String, 
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true, 
    }, 
    name: {
        type: String, 
        required: true, 
    }, 
    username: {
        type: String, 
        required: true, 
    }, 
    profileImg: {
        type: String, 
        required: true, 
    }, 
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
        default: [], 
    }, 
    comments: {
        type: [
            {
                comment: String, 
                user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
                name: String, 
                username: String, 
                profileImg: String, 
                createdAt: {type: Date, default: Date.now }, 
            },
        ],
        default: [], 
    }, 
},
{ timestamps: true }
); 

const Post = mongoose.models.Post || mongoose.model('Post', postSchema); 
// above here, if there's post model we wanna use it othewise we create it based on the postSchema; 
 export default Post; 