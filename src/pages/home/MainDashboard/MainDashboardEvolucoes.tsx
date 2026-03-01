import logo from '../../../assets/svgs/logo-psi.png';

const evolucoes =   [
	{
		id: 'bknavetvpr4dgt2fycaq9cf3',
		descricao: 'Estamos testando como as evoluções se comportam',
		data: '28/02/2026',
		idUser: 'guzz1vu36hzdd3smi4iyahgh',
	
	},
	{
		id: 'bknavetvpr4dgt2fycaq9cf3',
		descricao: 'Estamos testando como as evoluções se comportam',
		data: '28/02/2026',
		idUser: 'guzz1vu36hzdd3smi4iyahgh',
	
	},
	
]

export default function MainDashboardEvolucoes() {
	return (
		<section className='main-dashboard-container'>
			<div className='main-header-dashboard'>
				<img src={logo} alt='' className='logo-img-left' />
				<div className='header-dashboard'>
					<h3>Gerenciando as Evoluções do Seu Paciente de Forma inteligente</h3>
					<h4 className='text-green-800'>Sou Psi </h4>
				</div>
			</div>
			<div className="main-body-dashbboard">
				Teste
			</div>
		</section>
	);
}
