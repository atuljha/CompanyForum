import React, { forwardRef } from "react";
import "./Post.css";
//import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import PostService from "../services/PostService";





const Post = forwardRef(
  ({post,verified,isDelete, deletePost}, ref) => {

   // console.log(post)

  const[showComments, setShowComments] = React.useState(false)
  const[addComment, setAddComment] = React.useState(false)
  const[comment, setComment] = React.useState("")

  const commentElements = post.comments.map(c=>{
    return (
      <div className="post">
         <p className="post__headerDescription">{c}</p>
      </div>
    
   
    )
  })

  console.log(post.image)

  function addUserComment(){
           post.comments.push(comment)
           PostService.updatePost(post.id,post)
           .then(()=>{
            setComment("")
            setAddComment(false)
           })
           
  }
  function getDate(){

    var date = new Date(post.createdAt);
    console.log(date)
    return date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()
  }

  function handleChange(event){
    setComment( event.target.value)
}

    return (
      <div className="post" ref={ref}>
        <div className="post__body" onClick={()=>setShowComments(prev=>!prev)}>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {post.displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {post.displayName}
                </span>
                <span className="post__date">
                   {getDate()}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{post.description}</p>
            </div>
          </div>
          {<img src={post.image?post.image:"http://i.imgflip.com/1bij.jpg"} alt="" />}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" onClick={()=>setAddComment(prev=>!prev)} />
            {post.comments.length}
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon  />
            {post.likes}
            {isDelete && <Delete fontSize="small"  onClick ={deletePost}/>}
          </div>
          {addComment && (<div>
            <input type="text"
            placeholder="Type Something"
            onChange={handleChange}/>
            <Button className="postBox__postButton" onClick={addUserComment}>Post</Button>
            </div>)}
         {showComments && commentElements}
        </div>
      </div>
    );
  }
);

export default Post;
