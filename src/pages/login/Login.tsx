import '../../css/Login.css';
import LoginForm from '../../components/Forms';
import Footer from '../../components/Footer';
import LoginHeader from '../../components/Header';
import logo from '../../assets/svgs/logo-psi.png';


export default function Login() {
	return (
		<div className='main-container'>
			<LoginHeader />
			<div className='pataforma-logo'>
				<img src={logo} alt='' className='logo-img-left ' />
				<h3 className='h3-login-page'>Gestão inteligente para o cuidado emocional.</h3>
			</div>
			<LoginForm />
			<Footer />
		</div>
	);
}
