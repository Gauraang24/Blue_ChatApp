import React, { useEffect, useRef, useState } from 'react'
import DashBoardToggle from '../dashboard/DashBoardToggle'
import CreateRoomBtnModal from '../dashboard/CreateRoomBtnModal'
import { Divider } from 'rsuite'
import ChatRoomList from './Rooms/ChatRoomList'

const SideBar = () => {

  const topSideBarRef = useRef()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (topSideBarRef.current.scrollHeight) {
      setHeight(topSideBarRef.current.scrollHeight)
    }
  }, [topSideBarRef])


  return (
    <div className='h-100 pt-2'>

      <div ref={topSideBarRef}>
        <DashBoardToggle />
        <CreateRoomBtnModal />
        <Divider> Join Conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  )
}

export default SideBar
