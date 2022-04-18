import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";
import PostService  from "../services/PostService";
import PostBox from "./PostBox";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(false)

  useEffect(() => {
    PostService.getAllPosts()
    .then(res=>setPosts(res.data)) 
  }, [newPost]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <PostBox 
      setNewPost={()=> setNewPost(prev=>!prev)}
      />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            verified={true}
            
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
