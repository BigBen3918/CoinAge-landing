import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useStore from './useStore'
import Login from './pages/SignIn'
import Home from './pages/Home'
import Error from './pages/404'
import Loading from './components/Loading'

import './assets/scss/coinage.scss'


function App() {
	const {	loading, userid } = useStore()
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/home" component={Home}></Route>
				<Route exact path="/error" component={Error}></Route>
				<Route path="*" component={Error}></Route>
			</Switch>
			<ToastContainer/>
			<Loading width={70} height={70} color={'var(--default-color-1)'} opacity={0.3} show={!!loading}/>
		</BrowserRouter>
	)
}

export default App
