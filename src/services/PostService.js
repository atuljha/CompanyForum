import http from "../http-common"

class PostService{

    getAllPosts(){
        return http.get("/posts");
    }

    updatePost(id, post){
        console.log(post)
        return http.put(`/posts/${id}`,post)
    }
    createPost(description,name,id,postImage){
        console.log(postImage)
        const post={
            description:description,
            displayName:name,
            createdBy:id,
            image:postImage
        }
        return http.post("/posts",post)
    }

    getAllPostsForUser(id){
        return http.get(`/posts/users/${id}`)
    }

    deletePost(id){
        return http.delete(`posts/${id}`)
    }
    
}



export default new PostService();