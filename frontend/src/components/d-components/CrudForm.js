import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import createCrud from '../../features/crudSlice'

export default function CrudForm() {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [age, setAge] = useState('')

    //const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        //dispatch(createCrud({name, job, age}))

        setName('')
        setJob('')
        setAge('')
    }

  return (
    <>
        <div className="container-md">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input className="form-control" type="text" name='name' id="name" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                    <label >Job</label>
                    <input className="form-control" type="text" name='job' id="job" value={job} placeholder="Enter job" onChange={(e) => setJob(e.target.value)}/>
                    <label >Age</label>
                    <input className="form-control" type="number" name='age' id="age" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}
