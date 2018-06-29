import React from "react";
import ReactDOM from "react-dom";

//import Layout from "./components/Layout"; 


class Layout extends React.Component{

    constructor(){
        super();
        this.getName();
    }
     getName(){
         return  "williams!";
     }
    render(){
        //const name = "Will";
        return (
            <h1>Welcome pae!!!{this.getName()}</h1>
        )
    }
}
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
