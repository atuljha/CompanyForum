import React, { useState } from "react";
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";
import PostService from "../services/PostService";

function PostBox(props) {
  const [postMessage, setPostMessage] = useState("");
  const [postImage, setPostImage] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    PostService.createPost(postMessage,localStorage.getItem("name"), localStorage.getItem("id"))
    .then(()=> {
      setPostMessage("");
      setPostImage("");
      props.setNewPost()
    })
   
    }

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://gravatar.com/avatar/36443d460aac38468cc3957a77324ec2?s=400&d=mp&r=x" />
          <input
            onChange={(e) => setPostMessage(e.target.value)}
            value={postMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={postImage}
          onChange={(e) => setPostImage(e.target.value)}
          className="postBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendPost}type="submit"
          className="postBox__postButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;
