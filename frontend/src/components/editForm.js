import React from 'react'
import { useState } from 'react'

const EditForm = (props) => {

  const initialFormState = {fullName: "", job: "", age: ""}
  const initialFormStateTwo = {fullName: props.editCrud.name, job: props.editCrud.job, age: props.editCrud.age}
  const [input, setInput] = useState(initialFormStateTwo)

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    event.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <form>


        <div className="form-group">

          <h6>CURRENTLY EDITING: {props.editCrud.id}</h6>

          <label>Full Name</label>
          <input type="string" className="form-control" name="fullName" placeholder="Enter your name" value={input.fullName} onChange={handleChange}/>
          <br></br>

          <label>Job</label>
          <input type="text" className="form-control" name="job" placeholder="Enter your job" value={input.job} onChange={handleChange}/>
          <br></br>

          <label>Age</label>
          <input type="number" className="form-control" name="age" placeholder="Enter your age" value={input.age} onChange={handleChange}/>
          <br></br>

        </div>
        <br></br>


      </form>

      <button className="btn btn-secondary" onClick={() =>{
        props.callbackCancel()
        setInput(initialFormState)
      }}>CANCEL</button>

      <button className="btn btn-info" onClick={() =>{
        props.callBackEdit(props.editCrud.id, input)
        setInput(initialFormState)
      }}>SAVE CHANGES</button>

    </div>
  )
}

export default EditForm