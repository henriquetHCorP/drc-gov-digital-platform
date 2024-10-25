import Post from '../../../../lib/models/post.model'; 
import { connect } from '../../../../lib/mongodb/mongoose'; 
import { currentUser } from '@clerk/nextjs/server'; 

export const PUT = async (req) => {
  const user = await currentUser(); 
  try {
   await connect(); 
   const data = await req.json(); 
   if(!user) {
    return { status: 401, body: 'Unauthorized' }; 
   }
   const post = await Post.findById(data.postId); 
   if(post.likes.includes(user.publicMetadata.userMongoId)) {
  // above here,it means that you have already like the post and if you click you must remove the like
  const updatedPost = await Post.findByIdAndUpdate(
    data.postId, 
    { $pull: { likes: user.publicMetadata.userMongoId } },
     { new: true }
    ); 
  return new Response(JSON.stringify(updatedPost), {status: 200 }); 
   } else {
    // we wanna add the like
    const updatedPost = await Post.findByIdAndUpdate(
      data.postId, 
      { $addToSet: { likes: user.publicMetadata.userMongoId } }, 
      { new: true }
    ); 
    return new Response(JSON.stringify(updatedPost), { status: 200 }); 
   }
  } catch(error) {
    console.log('Error liking the post:', error);
    return new Response('Error liking post', {status: 500 });
  }
}; 