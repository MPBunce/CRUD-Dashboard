import React from 'react' 
import { useState } from 'react';

const AddCrud = () => {

    const initialFormState = {fullName: "", job: "", age: ""}

    const [input, setInput] = useState(initialFormState)


    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
        event.preventDefault();
        console.log(input);
    }

    const onSubmit = (event) => {

        console.log(input)

    }   
    

    return (

        <div>
            <form>

                <div className="form-group">

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

            <button className="btn btn-primary" onClick={onSubmit}>ADD CRUD</button>

        </div>

    );
  }
  
export default AddCrud;