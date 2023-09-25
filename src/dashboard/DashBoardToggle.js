import React, { useCallback } from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import { useMediaQuery, useModalState } from '../misc/customHooks'
import DashBoard from '.'
import { auth } from '../misc/firebase'

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState()
  const isMobile = useMediaQuery('(max-width: 992px)')

  const onSignOut = useCallback(() => {
    auth.signOut()

    Alert.info("Signed Out", 4000)

    close()
  },[close])

  return (
    <>
      <Button block color='blue' onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement='left'>
        <DashBoard onSignOut={onSignOut}/>
      </Drawer>
    </>
  )
}

export default DashBoardToggle
