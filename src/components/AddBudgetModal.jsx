import { Form ,Button, Modal } from "react-bootstrap"
import { useRef } from "react"

const nameRef= useRef()
const maxRef = useRef()



function AddBugetModal({show, handleClose}){
    function handleSubmit(e){

    }
    return(
        <Modal show = {show} onHide={handleClose}>
           <Form onSubmit={handleSubmit}>
             <Modal.Header closeButton>
                <Modal.Title>New Budget</Modal.Title>
             </Modal.Header>
             <Modal.Body>
                <Form.Group clasName = 'mb-3'controlId='name'></Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type='text' required/>

                <Form.Group clasName = 'mb-3'controlId='max'></Form.Group>
                <Form.Label>Maximum Spending</Form.Label>
                <Form.Control ref={maxRef} type='number' required min ={0} step = {0.01}/>

                <div className="d-flex justify content-end">
                    <Button variant="primary" type="submit"> Add Budget</Button>
                </div>
             </Modal.Body>
           </Form>

        
        </Modal>
    )
}


export default AddBugetModal