import React from 'react'
import { Button, Divider, Drawer } from 'rsuite'
import { useProfile } from "../context/profileContext"
import EditableInput from '../components/EditableInput'

const DashBoard = ({ onSignOut }) => {
  const { profile } = useProfile()

  const onSave = async (newData) => {

    console.log(newData)
  }
  return (
    <>
      <Drawer.Header>
        <Drawer.Title>
          DashBoard
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className='mb-2'>NickName</h6>}

        />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          sign Out
        </Button>
      </Drawer.Footer>
    </>
  )
}

export default DashBoard