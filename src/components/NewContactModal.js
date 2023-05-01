import React, {useRef} from 'react'
import {Form, Modal, Button} from 'react-bootstrap'
import { useContacts } from '../Context/ContactsProvider'

export default function NewContactModal({closeModal}) {
    const idRef = useRef()
    const nameRef = useRef()
    const {createContact} = useContacts()
  
    function handleSubmit(e){
    e.preventDefault()

    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  
    return (
    <>
        <Modal.Header closeButton>Create Contact</Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required/>
                </Form.Group>
                <Button type="submit" className='mt-2'>Create</Button>
            </Form>
        </Modal.Body>
    </>
  )
}
