import React from 'react' 

const Table = (props) => {
    console.log(props.tableData)
    console.log("test")


    return(

        <table className="table">
            <thead>
                <tr>
                <th scope="col">Element ID</th>
                <th scope="col">Name</th>
                <th scope="col">Job</th>
                <th scope="col">Age</th>
                <th scope="col">Edit CRUD</th>
                <th scope="col">Delete CRUD</th>
                </tr>
            </thead>
            <tbody>

                { (!props.tableData || props.tableData.length < 1) ?

                    <tr>
                    <th scope='row' colSpan={6} className='text-center'> 
                    <button type="button" className="btn btn-secondary bg-success">READING CRUD TO ADD, PLEASE WAIT OR ADD SOME CRUD</button> 
                    </th>
                    </tr>

                    :

                    props.tableData.map( (element) => 
                    
                    <tr key={element._id}>
                        <th scope="row">{element._id}</th>
                        <td>{element.name}</td>
                        <td>{element.job}</td>
                        <td>{element.age}</td>
                        <td>

                            <button type="button" className="btn btn-warning" >EDIT CRUD</button>    

                        </td>
                        <td>

                            <button type="button" className="btn btn-danger">DELETE CRUD</button>

                        </td>
                    </tr>

                ) }

            </tbody>
        </table>
    );
}

export default Table;