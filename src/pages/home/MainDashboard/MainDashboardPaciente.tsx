import '../../../css/HomePage.css'
import { useEffect, useState } from 'react';
import eye from '../../../assets/svgs/eye.svg';
import Modal from '../../../components/Modal';
import CreatePacientModal from '@/components/CreatePacientModal';
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PacientDashboardHeader from '../../../atom/PacientDashboardHeader'
import { fetchFunction } from '@/functions/fetch-function';
import { capitalizeWords } from '@/functions/capitalize-words';




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
	const [openCreatePacientModal, setOpenCreatePacientModal] = useState(false);
	const [listOfPacients, setListOfPacients] = useState<paciente[] | undefined>(undefined)

	async function refreshPacients() {
		const secret = await localStorage.getItem('token')
		const paciente = await fetchFunction('http://localhost:3333/get_pacient', secret)
		if (!paciente) return
		if (Array.isArray(paciente)) setListOfPacients(paciente)
	}

	useEffect(() => {
		refreshPacients()
	}, [])
	
	
	return (
		<section className='main-dashboard-container'>
			<PacientDashboardHeader/>
			<div className='flex flex-row pb-1 border-b-[0.916px]'>
				<h3 className='w-[71%] text-left'>Pacientes</h3>
				<nav className='flex flex-row'>
					<span 
						onClick={(e)=> {
							e.stopPropagation();
							setOpenCreatePacientModal(true)
						}}
						className='flex flex-rows items-center text-[0.850rem] text-right gap-0.5  text-zinc-500 hover:cursor-pointer hover:text-green-600' >
						<PlusCircleIcon className="w-4 h-4"/> Novo paciente
					</span>
				</nav>
			</div>
			<div className='main-dashboard-content'>
				{listOfPacients?.map((paciente) => {
					const pacientName = capitalizeWords(paciente.nome)
					return (
						<ul
							className={'li-pacient-container'}
							key={paciente.id}
							onClick={() => setActiveId(paciente.id)}
						>
							<li className='li-pacient-name'> {pacientName}</li>
							<li>{paciente.idade} Anos</li>
							{paciente.id ? <li> Paciente Ativo</li> : <li>Paciente Liberado</li>}
							<li
								onClick={(e) => {
									e.stopPropagation();
									setSelectedPaciente(paciente);
									setOpenModal(true);
								}}
							>
								<img className='li-pacient-img hover:cursor-pointer' src={eye} />
							</li>
						</ul>
					);
				})}
				<Modal
					isOpen={openModal}
					onClose={() => setOpenModal(false)}
					paciente={selectedPaciente}
				/>
				<CreatePacientModal
					isOpen={openCreatePacientModal}
					onClose={() => setOpenCreatePacientModal(false)}
					onSuccess={refreshPacients}
				/>
			</div>
		</section>
	);
}
