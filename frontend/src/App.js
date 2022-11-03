import React from "react";
import AddCrud from "./components/addCrud";
import Table from "./components/crudTable";
import ReadCrud from "./components/readCrud";
import axios from 'axios'
import { Component } from "react";


export default class App extends Component {

  state = {
    crud: []
  }

  constructor() {
    super();

    axios.get('/api/items').then(res => {
      console.log(res.data)
      this.setState({crud: res.data})
    })

  }

  readCrud = async () => {
    axios.get('/api/items').then(res => {
      console.log(res.data)
      this.setState({crud: res.data})
    })
  }


  createCrud = async (crud) => {

    const theName = crud.fullName
    const theJob = crud.job
    const theAge = crud.age

    let res = await axios.post('/api/items', {name: theName, job: theJob, age: theAge})

  }

  deleteCrud = async (crud) => {
    
    const id = crud.id
    let res = await axios.delete(`/api/items/${id}`)
    console.log(res)
  }

  editCrud = async () => {

  }


  render(){
    return (
      <>
        <div className="App">
          <div className="container">

            <ReadCrud callback={this.readCrud}/>
            <br></br>
            <AddCrud callback={this.createCrud}/>
            <br></br>
            <Table tableData={this.state.crud} callDelete={this.deleteCrud} callEdit={this.editCrud}/>

          </div> 
        </div>
      </>

    )
  }

}