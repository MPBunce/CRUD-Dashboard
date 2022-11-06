import React from "react";
import AddCrud from "./components/addCrud";
import Table from "./components/crudTable";
import ReadCrud from "./components/readCrud";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import EditForm from './components/editForm'
import { Component } from "react";


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      crud: [],
      editData: [],
      mode: false
    }

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
    console.log(res)
  }

  deleteCrud = async (id) => {
    
    console.log("delete")
    let res = await axios.delete(`/api/items/${id}`)
    console.log(res)

    axios.get('/api/items').then(res => {
      console.log(res.data)
      this.setState({crud: res.data})
    })

  }

  startEditCrud = async (id, name, job, age, ) => {

    console.log("starting edit")   
    const crud = {id, name, job, age}
    console.log(crud.id)
    this.setState({mode: true})
    this.setState({editData: crud})

  }

  finishEditCrud = async (id, crud) => {
    
    console.log("done edit")
    const editName = crud.fullName
    const editJob = crud.job
    const editAge = crud.age

    let res = await axios.put(`/api/items/${id}`, {name: editName, job: editJob, age: editAge})
    console.log(res)
    axios.get('/api/items').then(res => {
      console.log(res.data)
      this.setState({crud: res.data})
    })
    this.setState({mode: false})

  }

  cancelEdit = () => {
    this.setState({mode: false})
  }

  render(){

    return (
      <>
        <div className="App">
          <div className="container">

            <ReadCrud callback={this.readCrud}/>

            <br></br>

            {
              this.state.mode === true 
              ? 
              <EditForm callbackCancel={this.cancelEdit} callBackEdit={this.finishEditCrud} editCrud={this.state.editData}/> 
              : 
              <AddCrud callback={this.createCrud}/>

            }
            
            <br></br>
            <Table tableData={this.state.crud} callDelete={this.deleteCrud} callStartEdit={this.startEditCrud}/>

          </div> 
        </div>
      </>

    )

  }

}