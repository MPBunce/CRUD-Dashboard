import React from 'react' 

function ReadCrud({handleRead}) {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">CRUD APPLICATION</a>
                <button type="button" className="btn btn-success" onClick={ () => handleRead() }>READ CRUD</button>
            </div>
        </nav>

    )
}

export default ReadCrud