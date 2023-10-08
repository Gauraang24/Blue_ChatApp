import React from 'react'
import DashBoardToggle from '../dashboard/DashBoardToggle'
import CreateRoomBtnModal from '../dashboard/CreateRoomBtnModal'

const SideBar = () => {
  return (
    <div className='h-100 pt-2'>
      
      <div>
        <DashBoardToggle/>
        <CreateRoomBtnModal/>
      </div>
      Bottom
    </div>
  )
}

export default SideBar
