import React from "react";
import AddCrud from "./components/addCrud";
import Table from "./components/crudTable";
import ReadCrud from "./components/readCrud";
import axios from 'axios'
import { Component } from "react";

const api = axios.create({
  baseURL: `http://localhost:8000/api/items/`
})

export default class App extends Component {

  state = {
    crud: []
  }

  constructor() {
    super();

    api.get('/').then(res => {
      console.log(res.data)
      this.setState({crud: res.data})
    })

  }


  handleRead(){
    console.log("read test")
  }



  render(){
    return (
      <>
        <div className="App">
          <div className="container">

            <ReadCrud handleRead={this.handleRead}/>
            <br></br>
            <AddCrud/>
            <br></br>
            <Table tableData={this.state}/>

          </div> 
        </div>
      </>

    )
  }

}