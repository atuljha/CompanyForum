import http from "../http-common"

class UserService{
    create(data) {
        return http.post("/users", data);
      }

      login(data) {
          return http.post("/users/login",data)
      }
}


export default new UserService();