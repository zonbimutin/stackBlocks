import Image from "next/image";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import AuthModal from "../Modals/AuthModal";
import logo from "../../public/logo.png"

const Header = () => {
	
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">
					<Image src={'/logo.png'} width={40} height={40}/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/game">Start Game</Nav.Link>
						<Nav.Link href="/scores">Scores</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<AuthModal/>
			</Container>
		</Navbar>
	)
}

export default Header