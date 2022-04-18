import React from "react"
import Feed from "./Feed"
import "./Home.css"
import Sidebar from "./Sidebar"
import Polls from "./Polls"
import Widgets from "./Widgets"


export default function Home(){

     console.log(localStorage.getItem("id"))
    return (
        <div className="app">
             <Sidebar />
             <Feed />
             <Polls /> 
             {/*<Widgets />*/}
        </div>
    )
}