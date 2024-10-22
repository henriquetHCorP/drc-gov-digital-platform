import Post from '../../../../lib/models/post.model.js'; 
import { connect } from '../../../../lib/mongodb/mongoose.js'; 
import { currentUser } from '@clerk/nextjs/server'; 

export const POST = async (req) => {
    const user = await currentUser(); 
    try {
       await connect(); 
       // here we wanna get information we send through input.jsx(body.JSON.stringify({..})) and the way we get it is through req.json
      const data= await req.json(); 
      if(!user || user.publicMetadata.userMongoId !== data.userMongoId){
        // if the user ==> user.publicMetadata.userMongoId comming from the server or backend is not equal to user ==> data.userMongoId coming from the client 
        return new Response('Unauthorized', {
            status: 401, 
        }); 
    }
     const newPost = await Post.create({
        user: data.userMongoId, 
        name: data.name, 
        username: data.username, 
        text: data.text, 
        profileImg: data.profileImg, 
        image: data.image, 
     }); 
     await newPost.save(); 
     return new Response(JSON.stringify(newPost), {
        status: 200, 
     }); 
    }catch(error) {
      console.log('Error creating post:', error);
      return new Response('Error creating post', {
        status: 500,
      }); 
    }
}