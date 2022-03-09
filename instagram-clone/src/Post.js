import React, {useState, useEffect} from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import { db } from "./firebase";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('')

  let unsubscribe;
  if(postId) {
    unsubscribe = db
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .onSnapshot((snapshot) => {
      setComments(snapshot.docs.map((doc) => doc.data()))
    })
  }
//   return() => {
//     unsubscribe()
//   };
// }, [postId]

const postComment = (event) => {

}

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Avatar"
          src="https://thumbs.dreamstime.com/b/user-profile-icon-creative-trendy-colorful-round-button-illustration-isolated-156511788.jpg"
        />

        <h3>{username}</h3>
        {/* header -> avatar + username */}
      </div>

      <img className="post__image" src={imageUrl} alt="imageURL" />

      {/* image */}

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption */}

    <form className="post__commentBox">
      <input 
        className="post__input"
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        disabled={!comment}
        className="post__button"
        type="submit"
        onClick={postComment}
        >
        Post
      </button>
    </form>

    </div>
  );
}

export default Post;
