import { Outlet } from "react-router-dom";
import React from 'react'
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

/*Components*/

const AdminLayout = () =>{
    return (
        <>
          <div className="grid grid-cols-6 min-h-screen">
            <div className="bg-fuchsia-500 h-full">
              <Sidebar/>
            </div>
            <div className="col-span-5">
              <NavBar/>
              <div className='p-10'>
                <Outlet/>
              </div>
            </div>
          </div>
          
        </>
      );
}
export default AdminLayout;

