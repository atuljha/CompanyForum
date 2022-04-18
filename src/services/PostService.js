import http from "../http-common"

class PostService{

    getAllPosts(){
        return http.get("/posts");
    }

    updatePost(id, post){
        console.log(post)
        return http.put(`/posts/${id}`,post)
    }
    createPost(description,name,id){
        console.log(name)
        const post={
            description:description,
            displayName:name,
            createdBy:id
        }
        return http.post("/posts",post)
    }
    
}



export default new PostService();