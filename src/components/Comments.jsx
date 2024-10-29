import Comment from './Comment'; 
import React from 'react'

export default function Comments({comments}) {
  const sortedComments = comments.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  ); 
  return (
    <div>
      {sortedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} /> 
      ))}
    </div>
  )
}