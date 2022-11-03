import React from 'react' 

function ReadCrud({callback}) {
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">CRUD APPLICATION</a>

                <button className="btn btn-success" onClick={ () => callback()}>READ CRUD</button>

            </div>
        </nav>

    )
}

export default ReadCrud