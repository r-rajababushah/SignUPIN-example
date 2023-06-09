import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App;