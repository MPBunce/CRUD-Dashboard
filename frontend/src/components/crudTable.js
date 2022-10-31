import React from 'react' 

function Table(props){
    console.log(props.tableData)
    console.log("test")

    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Element ID</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Edit CRUD</th>
                <th scope="col">Delete CRUD</th>
                </tr>
            </thead>
            <tbody>

          

                <tr>
                <th scope="row">id</th>
                <td>crud.name</td>
                <td>crud.job</td>
                <td>age</td>
                <td>

                    <button type="button" className="btn btn-warning mr-1" >EDIT CRUD</button>    

                </td>
                <td>
                    <button type="button" className="btn btn-danger">DELETE CRUD</button>

                </td>
                </tr>

                

            </tbody>
        </table>
    );
}

export default Table;