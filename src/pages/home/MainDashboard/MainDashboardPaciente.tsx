import { useState } from 'react';
import eye from '../../../assets/svgs/eye.svg';
import Modal from '../../../components/Modal';
import logo from '../../../assets/svgs/logo-psi.png';

const pacientes = [
	{
		id: 'bknavetvpr4dgt2fycaq9cf3',
		nome: 'Henrique Beserra',
		idade: 17,
		email: 'beserrahnrq@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'guzz1vu36hzdd3smi4iyahgh',
		nome: 'Amanda Cristina Da Silva',
		idade: 26,
		email: 'cristmanda@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'v03jvno3t47qm65nssf8e0g4',
		nome: 'Nivanildo Henrique Beserra Da Silva',
		idade: 26,
		email: 'zeluiz@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'vguvcoktcl63lugp2xvkssdsnqc',
		nome: 'Henrique Beserra ',
		idade: 26,
		email: 'zeluiz@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'bknavetvpr4dgt2fycasaaq9cf3',
		nome: 'Henrique Beserra',
		idade: 17,
		email: 'beserrahnrq@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'bknavetvpr4dgt2asafycaq9cf3',
		nome: 'Henrique Beserra',
		idade: 17,
		email: 'beserrahnrq@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'bknavetvpr4dgt2fycaq9c11',
		nome: 'Henrique Beserra',
		idade: 17,
		email: 'beserrahnrq@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
	{
		id: 'basasknavetvpr4dgt2fycaq9c11',
		nome: 'Henrique Beserra',
		idade: 17,
		email: 'beserrahnrq@gmail.com',
		whats: '81994686223',
		nome_responsavel: null,
		contato_responsavel: null,
	},
];

type paciente = {
	id: string;
	nome: string;
	idade: number;
	email: string;
	whats: string;
	nome_responsavel: null;
	contato_responsavel: null;
};

///// Acima Pacientes teste
export default function MainDashboardPacient() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [, setActiveId] = useState<string | null>(null);
	const [selectedPaciente, setSelectedPaciente] = useState<paciente | null>(null);
	const [openModal, setOpenModal] = useState(false);

	return (
		<section className='main-dashboard-container'>
			<div className='main-header-dashboard'>
				<img src={logo} alt='' className='logo-img-left' />
				<div className='header-dashboard'>
					<h3>Olá, Nivanildo Beserra</h3>
					<h4> Seja bem vindo de volta a sua plataforma de gestão.</h4>
				</div>
			</div>
			<h3 className='dashboard-content-h3'>Pacientes</h3>
			<div className='main-dashboard-content'>
				{pacientes.map((paciente) => {
					return (
						<ul
							className={'li-pacient-container'}
							key={paciente.id}
							onClick={() => setActiveId(paciente.id)}
						>
							<li className='li-pacient-name'> {paciente.nome}</li>
							<li>{paciente.idade} Anos</li>
							{paciente.id ? <li> Paciente Ativo</li> : <li>Paciente Liberado</li>}
							<li
								onClick={(e) => {
									e.stopPropagation();
									setSelectedPaciente(paciente);
									setOpenModal(true);
								}}
							>
								<img className='li-pacient-img' src={eye} />
							</li>
						</ul>
					);
				})}
				<Modal
					isOpen={openModal}
					onClose={() => setOpenModal(false)}
					paciente={selectedPaciente}
				/>
			</div>
		</section>
	);
}
