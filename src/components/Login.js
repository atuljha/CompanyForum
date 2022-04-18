import { Button } from "@material-ui/core";
import React from "react"
import { useNavigate } from "react-router-dom"
import UserService from "../services/UserService";
import "./Login.css"




export default function Login(){

    const[data, setData] = React.useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();

    function handleChange(event){

        const {name, value} = event.target

        setData(prev=> ({
             
                ...prev,
                [name]:value
            }))
    }

    function handleClick(){
        UserService.login(data)
        .then(res=>{
            console.log(res.data)
            localStorage.setItem("id", res.data._id)
            localStorage.setItem("name", `${res.data.firstName} ${res.data.lastName}` )

            navigate("/home")
        })
    }

    return(
        <div className="login">
       
        <input 
        type="text"
         placeholder="Email"
         name="email"
         value={data.email}
         onChange={handleChange}
         />
        <input 
        type="password"
         placeholder="Password"
         name="password"
         value={data.password}
         onChange={handleChange}/> 
        <Button onClick={handleClick}> Login</Button>
        </div>
    )
}