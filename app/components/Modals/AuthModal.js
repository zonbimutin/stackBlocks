import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import AuthForm from "../Auth/AuthForm";

const AuthModal = () => {
	
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
		<>
			<Button className={'btn btn-default btn-hover-white size-md ms-2'} onClick={handleShow}>Login</Button>
			<Modal
				show={show}
				onHide={handleClose}
				aria-labelledby="contained-modal-title-vcenter"
				centered
				contentClassName={'rounded-lg'}
			>
				<Modal.Body className={"p-5"} >
					<AuthForm/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default AuthModal