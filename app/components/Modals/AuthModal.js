import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import AuthForm from "../Auth/AuthForm";

const AuthModal = () => {
	
	const [show, setShow] = useState(false);
	
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	return (
		<>
			<Button variant="primary" onClick={handleShow}>Login</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Body className={"p-5"}>
					<AuthForm/>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default AuthModal