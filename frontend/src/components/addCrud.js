import React, { useReducer } from 'react' 
import { useState } from 'react';

const AddCrud = () => {

    const initialFormState = {fullName: '', job: '', age: ''}

    const [input, setInput] = useState(initialFormState)


    const handleInputChange = (event) => {
        const {fullName, job, age} = event.target

        setInput({...input, fullName, job, age })

    }

    const onSubmit = (input) => {

        const {fullName, job, age} = input
        console.log(fullName)
        console.log(job)
        console.log(age)
        setInput(initialFormState)

    }   
    

    return (

        <div>
            <form>

                <div className="form-group">

                    <label>Full Name</label>
                    <input type="string" className="form-control" placeholder="Enter your name" value={input.fullName} onChange={handleInputChange}/>
                    <br></br>

                    <label>Job</label>
                    <input type="text" className="form-control" placeholder="Enter your job" value={input.job} onChange={handleInputChange}/>
                    <br></br>

                    <label>Age</label>
                    <input type="number" className="form-control" placeholder="Enter your age" value={input.age} onChange={handleInputChange}/>
                    <br></br>

                </div>
                <br></br>

                
            </form>

            <button className="btn btn-primary" onClick={onSubmit}>ADD CRUD</button>

        </div>

    );
  }
  
export default AddCrud;