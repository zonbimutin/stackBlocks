import {FiMenu, FiX} from "react-icons/fi"
import {useEffect, useState} from "react";
import Image from "next/image";


// import Socials from "../Shared/Socials";

import Scrollspy from 'react-scrollspy'
import {Button} from "react-bootstrap";
import AuthModal from "../Modals/AuthModal";
import useAuth from "../../hooks/useAuth";


const Header2 = ({header}) => {
	
	const {menu, logo} = header
	const {auth, logout} = useAuth()
	
	const [openMenu, setOpenMenu] = useState(false)
	
	const items = menu ? menu.links.map((link) => {
		return link.label.toLowerCase()
	}) : []
	
	const color = 'color-black'
	
	
	const onScroll = (e) => {
		let value = window.scrollY;
		if (value > 100) {
			document.querySelector('.header--fixed').classList.add('sticky')
		}else{
			document.querySelector('.header--fixed').classList.remove('sticky')
		}
	}
	
	
	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	},[])
	
	return (
		<header className={`header-area header-style-two header--fixed ${color}`}>
			<div className={`header-wrapper ${openMenu ? 'menu-open':''}`}>
				<div className="header-left d-flex align-items-center">
					<div className="logo">
						<a href={"/"}>
							<Image src={'/logo.png'} width={40} height={40}/>
						</a>
					</div>
				</div>
				<div className="header-right">
					{menu &&
						<nav className="mainmenunav d-lg-block me-3">
							<Scrollspy className="mainmenu" items={items} currentClassName="is-current" >
								{menu.links.map((link , key) => (
									<li key={key} ><a href={link.url}>{link.label}</a></li>
								))}
							</Scrollspy>
						</nav>
					}
					
					<div className="social-share-inner d-none d-sm-block">
						<ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
							{/*<Socials network={header.socials.network}/>*/}
						</ul>
					</div>
					{auth
						? <Button className={'btn btn-default btn-hover-white size-md ms-2'} onClick={() => logout()}>Logout</Button>
						: <AuthModal/>
					}
					{/* Start Humberger Menu  */}
					<div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
						<span onClick={() => setOpenMenu(!openMenu)} className="menutrigger text-white"><FiMenu /></span>
					</div>
					{/* End Humberger Menu  */}
					<div className="close-menu d-block d-lg-none">
						<span onClick={() => setOpenMenu(!openMenu)} className="closeTrigger"><FiX /></span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header2