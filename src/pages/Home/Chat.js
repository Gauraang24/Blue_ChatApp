import React from 'react'
import ChatTop from '../../components/chat-window/top'
import Message from '../../components/chat-window/messages'
import ChatBottom from '../../components/chat-window/bottom'
import { useParams } from 'react-router'
import { useRooms } from "../../context/rooms.context"
import { Loader } from 'rsuite'


const Chat = () => {

  const { chatId } = useParams()

  const rooms = useRooms()

  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed='slow' />
  }

  const currentRoom = rooms.find(room => room.id === chatId)

  if (!currentRoom) {
    return <h6 className='text-center mt-page'> Chat {chatId} not found</h6>
  }

  return (
    <>
      <div className='chat-top'><ChatTop /></div>
      <div className='chat-middle'><Message /></div>
      <div className='chat-bottom'><ChatBottom /></div>
    </>
  )
}

export default Chat
