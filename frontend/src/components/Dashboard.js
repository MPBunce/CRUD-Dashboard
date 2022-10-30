import React from "react";
import CrudForm from "./d-components/CrudForm";

function Dashboard() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-md">
                    <a className="navbar-brand" href="#">CRUD Dashboard</a>
                </div>
            </nav>
            <br></br>
            <CrudForm/>
        </>

    );
}

export default Dashboard