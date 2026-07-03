import '../../css/landin-page/LandingPage.css';
import logo from '../../assets/images/nivanildo_s_bg.png';


export default function HeaderLandingPage(){

    return(
       <div className="home-landing-page-container">
         <div className="header-landing-page">
            <div className="header-landing-page-text">
                <h1>Olá, <br></br>Eu sou o  Nivanildo Beserra. </h1>
                <p>Psicólogo e Psicanalista - Bem estar e Saúde mental no seu dia a dia.</p>
            </div>
            <img src={logo} alt="Foto do pscicólogo Nivanildo Beserra de terno" 
            className="logo-landing-page"/>
        </div>
        <div className="header_information">
            <ul className='header-information-ul'>
                <li>Consultas Online</li>
                <li>Melhor Preço da Região</li>
                <li>Escuta Ativa</li>
                <li>Ética e Confidencialidade</li>
                <li>Atendimento Personalizado</li>
                <li>Cuidado Integral com a Saúde Mental</li>
            </ul>
        </div>
       </div>
    )

}