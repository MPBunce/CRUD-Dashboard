import React from 'react' 
import { useState } from 'react';

function AddCrud() {

    const [input, setInput] = useState({

        name: '',
        job: '',
        age: '',

    })

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value, [event.target.job]: event.target.job, [event.target.age]: event.target.age});
    };

    return (
        <div>
            <form>
                <div className="form-group">

                    <label>Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" value={input.name}/>
                    <br></br>
                    <label>Job</label>
                    <input type="text" className="form-control" id="job" placeholder="Enter your job" value={input.job}/>
                    <br></br>
                    <label>Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter your age" value={input.age}/>
                    <br></br>

                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">ADD CRUD</button>
                
            </form>
        </div>
    );
  }
  
export default AddCrud;