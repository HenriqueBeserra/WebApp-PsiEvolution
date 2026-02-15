import BrasilFlag from '../assets/svgs/Bandeira_do_Brasil.svg';
import '../css/Login.css';

export default function LoginHeader() {
	return (
		<div className='login-header'>
			<div>PT-BR</div>
			<img className='login-header-img' src={BrasilFlag} />
		</div>
	);
}
