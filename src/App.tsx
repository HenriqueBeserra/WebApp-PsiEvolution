import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import HomePage from './pages/home/Home';

function App() {
	return (
		<Routes>
			<Route path={'/login'} element={<Login />} />
			<Route path='/home' element={<HomePage />} />
		</Routes>
	);
}

export default App;
