import React from 'react'
import firebase from "firebase/app"
import { Container, Row, Grid, Col, Panel, Button, Icon, Alert } from 'rsuite'
import { auth, database } from '../misc/firebase'



const SignIn = () => {


  const signInWithProvider = async (provider) => {
    //  const result= await auth.signInWithPopup(provider)
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider)
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        })
      }
      Alert.success("Signed In", 4000)
    } catch (err) {
      Alert.info(err.message, 4000)
    }

    // console.log("result===", result)
  }
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider())
  }
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider())
  }
  return (
    <Container>
      <Grid className='mt-page'>
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className='text-center'>
                <h2>Welcome to Blue Chat Application</h2>
                <p>Progresive Chat PLatform for NeoPhytes</p>
              </div>
              <div className='mt-3'>
                <Button block color='blue' onClick={onFacebookSignIn}>
                  <Icon icon="facebook" /> Continue with FaceBook
                </Button>
                <Button block color='green' onClick={onGoogleSignIn}>
                  <Icon icon="google" /> Continue with Google
                </Button>
              </div>
            </Panel>

          </Col>
        </Row>
      </Grid>

    </Container>
  )
}

export default SignIn

//module 4 video 2nd @13 min