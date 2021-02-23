import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<>
			<nav className="navbar">
				<div className="navbar__container">
					<Link to="/" className="navbar__logo">
						TRVL <i class="fab fa-typo3" />
					</Link>
					<div className="menu__icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav__menu active' : 'nav__menu'}>
						<li className="nav__item">
							<Link to="/" className="nav__links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/services" className="nav__links" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/products" className="nav__links" onClick={closeMobileMenu}>
								Products
							</Link>
						</li>

						<li>
							<Link to="/sign-up" className="nav__links__mobile" onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;