import React from 'react'
import SidebarOne from './LeftSide/LeftSideDashboard'
import ReactJsClientSideTable from "./RightSide/RightSideDashboard";
import Popup from "./RightSide/UpperLayer";
function Dashboard() {
  return (
    <div className='dashboard flex'>
      <SidebarOne />
   
      <div className=' container p-4 mt-3' style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

        <Popup />
        <ReactJsClientSideTable />
      </div>
    </div>
  )
}

export default Dashboard