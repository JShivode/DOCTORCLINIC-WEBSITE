import React, { Fragment } from "react";
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from "react-router-dom";



const Layout = ()=>{
    return(
        <Fragment>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}


export default Layout;