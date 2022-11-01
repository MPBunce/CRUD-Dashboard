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


  createCrud = async () => {
    api.create('/').then(res => {
      
    })
  }

  deleteCrud = async () => {
    
  }

  editCrud = async () => {
    
  }


  render(){
    return (
      <>
        <div className="App">
          <div className="container">

            <ReadCrud/>
            <br></br>
            <AddCrud/>
            <br></br>
            <Table tableData={this.state.crud}/>

          </div> 
        </div>
      </>

    )
  }

}