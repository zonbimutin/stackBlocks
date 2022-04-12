import Image from "next/image";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import AuthModal from "../Modals/AuthModal";
import useAuth from "../../hooks/useAuth";

const Header = () => {
	
	const {auth, logout} = useAuth()
	
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<Image src={'/logo.png'} width={40} height={40}/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/game">Start Game</Nav.Link>
						<Nav.Link href="/score">Scores</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				{auth
					? <Button variant="primary" onClick={() => logout()}>Logout</Button>
					: <AuthModal/>
				}
				
			</Container>
		</Navbar>
	)
}

export default Header