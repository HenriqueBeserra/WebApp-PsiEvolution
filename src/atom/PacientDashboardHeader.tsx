import logo from '../assets/svgs/logo-psi.png';
import '../css/HomePage.css'

export default function PacientDashboardHeader (){
    return (
        <div className='main-header-dashboard'>
            <img src={logo} alt='' className='logo-img-left' />
                <div className='header-dashboard'>
                    <h3>Olá, Nivanildo Beserra</h3>
                    <h4> Seja bem vindo de volta a sua plataforma de gestão.</h4>
                </div>
        </div>
    )
}