import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../useStore'
import SideMenu from './sidemenu'
import logo from '../assets/img/logo.png'
import menu from '../assets/img/menu-icon.svg'
  
const Header = () => {
	const { update, userid} = useStore()
	const updateStatus = (params : {[key : string] : string | number | boolean | any}) => setStates({ ...state, ...params })
	const [state, setStates] = React.useState({
		showSideMenu : false
	})
	return (
		<>
			<header>
				<div className="container">
					<div className='justify' >
						<Link to="/"><img src={logo} className="logo " alt={'logo'} /></Link>
						<div className='justify middle'>
							<Link to="/" className={`header-menu`}>Home</Link>
							<Link to="/" className={`header-menu`}>About Us</Link>
							<Link to="/" className={`header-menu`}>Features</Link>
							<Link to="/" className={`header-menu`}>Satify</Link>
							<Link to="/" className={`header-menu`}>Blog</Link>
							<Link to="/" className={`header-menu`}>Contact</Link>
							<Link to="/login" className={`header-menu active`}>Sign In</Link>
							  <span className="side-menu pointer" onClick={() => { updateStatus({ showSideMenu : true }) }}><img src={menu} alt={'menu'} /></span>
						</div>
					</div>
				</div>
			</header >
			
			<SideMenu menushow={state.showSideMenu} onClose={() => updateStatus({ showSideMenu : false })}  />
		</> 
	) 
};
 
export default Header;