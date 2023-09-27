import React, { useRef, useState } from 'react'
import { Alert, Button, Modal } from 'rsuite'
import { useModalState } from '../misc/customHooks'
import AvatarEditor from 'react-avatar-editor'
import { useProfile } from '../context/profileContext'
import { database, storage } from '../misc/firebase'

const fileInputType = '.png, .jpeg, .jpg'
const acceptedFileType = ['image/png', "image/jpeg", 'image/jpg']
const isValidFile = (file) => acceptedFileType.includes(file.type.toLowerCase())

const getBlob = async (canvas) => {
    return new Promise((res, rej) => {
        canvas.toBlob((blob) => {
            if (blob) {
                res(blob)
            } else {
                rej(new Error('File Process error'))
            }
        })
    })
}

const AvatarUploadBtn = () => {

    const { isOpen, open, close } = useModalState()

    const { profile } = useProfile()
    const [img, setImg] = useState(null)
    const [isLoading,setLoading]=useState(false)
    const AvatarEditorRef = useRef()

    const onFileInputChange = (ev) => {
        const currFiles = ev.target.files

        if (currFiles.length === 1) {
            const file = currFiles[0]

            if (isValidFile(file)) {
                setImg(file)
                open()
            } else {
                Alert.warning(`Wrong File Type ${file.type}`, 4000)
            }
        }

    }
    const onUploadClick = async () => {
        const canvas = AvatarEditorRef.current.getImageScaledToCanvas()

        setLoading(true)

        try {
            const blob = await getBlob(canvas)

            const avatarFIleRef = storage.ref(`/profile/${profile.uid}`).child("avatar")

            const uploadAvatarResult = await avatarFIleRef.put(blob, {
                cacheControl: `public,max-age=${3600 * 24 * 3}`
            })
            const downloadUrl = await uploadAvatarResult.ref.getDownloadURL()

            const userAvatarRef = database.ref(`/profile/${profile.uid}`).child("avatar")

            userAvatarRef.set(downloadUrl)

            setLoading(false)
            Alert.info("Avatar has been uploaded", 4000)
        } catch (error) {
            setLoading(false)
            Alert.error(error.message, 4000)
        }
    }

    return (
        <div className='mt-3 text-center'>
            <div>
                <label htmlFor='avatar-upload' className='d-block cursor-pointer padded'>
                    Select New Avatar
                    <input id="avatar-upload" type='file' className='d-none' accept={fileInputType} onChange={onFileInputChange} />
                </label>
                <Modal show={isOpen} onHide={close}>

                    <Modal.Header>
                        <Modal.Title>
                            Adjust and Upload new avatar
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex justify-content-center align-items-center h-100'>
                        <div>
                            {img &&
                                (<AvatarEditor
                                    ref={AvatarEditorRef}
                                    image={img}
                                    width={200}
                                    height={200}
                                    border={10}
                                    borderRadius={100}
                                    rotate={0}
                                />)}
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button block appearance='ghost' onClick={onUploadClick} disabled={isLoading}>
                            Upload New Avatar
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </div>
    )
}

export default AvatarUploadBtn
