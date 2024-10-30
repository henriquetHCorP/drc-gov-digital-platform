import Post from '../../../../lib/models/post.model';
import { connect } from '../../../../lib/mongodb/mongoose';
import { currentUser } from '@clerk/nextjs/server';

export const PUT = async (req, res) => {
const user = await currentUser();
  try {
    await connect();
    const data = await req.json();
    if (!user) {
    //return { status: 401, body: 'Unauthorized' };
    res.status(401).json({ body: 'Unauthorized' })
    }
    const post = await Post.findById(data.postId);
    if (post.likes.includes(user.publicMetadata.userMongoId)) {
      const updatedPost = await Post.findByIdAndUpdate(
        data.postId,
        { $pull: { likes: user.publicMetadata.userMongoId } },
        { new: true }
      );
    //   return new Response(JSON.stringify(updatedPost), { status: 200 });
    res.status(200).JSON.stringify(updatedPost); 
    
    } else {
      const updatedPost = await Post.findByIdAndUpdate(
        data.postId,
        { $addToSet: { likes: user.publicMetadata.userMongoId } },
        { new: true }
      );
    //   return new Response(JSON.stringify(updatedPost), { status: 200 });
    res.status(200).JSON.stringify(updatedPost); 
    
    }
  } catch (error) {
    console.log('Error liking post:', error);
    // return new Response('Error liking post', { status: 500 });
    res.status(200).json({ message: 'Error liking post' }) 
  }
};
