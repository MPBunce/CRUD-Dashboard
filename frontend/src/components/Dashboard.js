import React from "react";
import { useEffect } from "react";
import {useSelector}  from 'react-redux'
import CrudForm from "./d-components/CrudForm";

function Dashboard() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-md">
                    <a class="navbar-brand" href="#">CRUD Dashboard</a>
                </div>
            </nav>
            <br class></br>
            <CrudForm/>
        </>

    );
}

export default Dashboard