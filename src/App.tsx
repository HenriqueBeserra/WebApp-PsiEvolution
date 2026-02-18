import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import HomePage from './pages/home/Home';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';


function App() {
	
	
	
	return (
		<Routes>
			<Route path={'/login'} element={<Login />} />
			<Route element={ <PrivateRoute/> }>
				<Route path={'/home'} element={<HomePage />} />	
			</Route>
		</Routes>

	);
}


export default App;