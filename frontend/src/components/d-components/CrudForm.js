import React from 'react';
import { useState } from 'react';

export default function CrudForm() {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [age, setAge] = useState('')

    //const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        //dispatch()
    }

  return (
    <>
        <div class="container-md">
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input class="form-control" type="text" name='name' id="name" value={name} placeholder="Enter Name"/>
                    <label for="exampleInputEmail1">Job</label>
                    <input class="form-control" type="text" name='job' id="job" value={job} placeholder="Enter job"/>
                    <label for="exampleInputPassword1">Age</label>
                    <input class="form-control" type="number" name='age' id="age" value={age} placeholder="Enter Age"/>
                </div>
                <br></br>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}
