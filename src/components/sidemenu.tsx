import { Link } from 'react-router-dom'
import { Close } from '../components/Icons'
import logo from '../assets/img/logo.png'


interface SideMenuProps {
	menushow: boolean
	onClose: () => void
}

const SideMenu = ({ menushow,  onClose }: SideMenuProps) => {
	return (
		<>
			<div className={`side-menu-panel `} style={{right:`${menushow?'0':'-102%'}`}}>
				<div className="header-bar justify">
					<img src={logo} alt="logo" />
					<span className='pointer' onClick={onClose}>
						<Close width={20} height={20} />
					</span>
				</div>
				<Link to="../" className='side-menu'>Home</Link>
				<Link to="../" className='side-menu'>About Us</Link>
				<Link to="../" className='side-menu'>Features</Link>
				<Link to="../" className='side-menu'>Satify</Link>
				<Link to="../" className='side-menu'>Blog</Link>
				<Link to="../" className='side-menu'>Contact</Link>

				<Link to="../login" className='side-menu active'>Login</Link>
			</div>
		</>
	)
};

export default SideMenu;