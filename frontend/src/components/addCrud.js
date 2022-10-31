import React from 'react' 

function AddCrud() {
    return (
        <div>
            <form>
                <div className="form-group">

                    <label>Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
                    <br></br>
                    <label>Job</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your job"/>
                    <br></br>
                    <label>Age</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your age"/>
                    <br></br>

                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">ADD CRUD</button>
                
            </form>
        </div>
    );
  }
  
export default AddCrud;