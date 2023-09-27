import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite'
import { useProfile } from "../context/profileContext"
import EditableInput from '../components/EditableInput'
import { database } from '../misc/firebase'

const DashBoard = ({ onSignOut }) => {
  const { profile } = useProfile()

  const onSave = async (newData) => {

    const userNickNameRef = database.ref(`/profiles/${profile.uid}`).child('name')

    try {
      await userNickNameRef.set(newData)

      Alert.success('NickName has been updated', 4000)
    } catch (error) {
      Alert.error(error.message, 4000)
    }
    // console.log(newData)
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