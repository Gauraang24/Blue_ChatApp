import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import { useMediaQuery, useModalState } from '../misc/customHooks'
import DashBoard from '.'

const DashBoardToggle = () => {
  const { isOpen, open, close } = useModalState()
  const isMobile = useMediaQuery('(max-width: 992px)')
  return (
    <>
      <Button block color='blue' onClick={open}>
        <Icon icon="dashboard" /> DashBoard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement='left'>
        <DashBoard />
      </Drawer>
    </>
  )
}

export default DashBoardToggle
