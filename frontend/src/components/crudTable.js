import React from 'react' 

const Table = (props) => {
    console.log(props.tableData)
    console.log("test")

    return(
        <>
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
                            <br></br>
                            <br></br>
                            <br></br>
                            <div type="button" className="bg">PLEASE ADD SOME CRUD OR PRESS THE READ BUTTON UP TOP</div> 
                            <br></br>
                            <br></br>
                            <br></br>
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

                                <button type="button" className="btn btn-warning" data-toggle="modal" data-target="editForm" onClick={ ()=> props.callStartEdit(element._id, element.name, element.job, element.age)}>EDIT CRUD</button>    

                            </td>
                            <td>

                                <button type="button" className="btn btn-danger" onClick={ ()=> props.callDelete(element._id)}>DELETE CRUD</button>

                            </td>

                        </tr>

                    
                       

                    ) }
   
                </tbody>
            </table>

            
        </>
    );
}

export default Table;