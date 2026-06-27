import '../../../css/HomePage.css'
import { useEffect, useState } from 'react';
import eye from '../../../assets/svgs/eye.svg';
import Modal from '../../../components/Modal';
import CreatePacientModal from '@/components/CreatePacientModal';
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import PacientDashboardHeader from '../../../atom/PacientDashboardHeader'
import { fetchFunction } from '@/functions/fetch-function';
import { capitalizeWords } from '@/functions/capitalize-words';
import { handleDeletePacients } from '@/functions/pacients/handle-delete-pacients';




type paciente = {
	id: string;
	nome: string;
	idade: number;
	email: string;
	whats: string;
	nome_responsavel: null;
	contato_responsavel: null;
};

const urlGetPacients = 'http://localhost:3333/get_pacient'

///// Acima Pacientes teste
export default function MainDashboardPacient() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [, setActiveId] = useState<string | null>(null);
	const [selectedPaciente, setSelectedPaciente] = useState<paciente | null>(null);
	const [openModal, setOpenModal] = useState(false);
	const [openCreatePacientModal, setOpenCreatePacientModal] = useState(false);
	const [listOfPacients, setListOfPacients] = useState<paciente[] | undefined>(undefined)
	const [searchedPacient, setSearchedPacient] = useState('')

	async function refreshPacients() {
		const secret = await localStorage.getItem('token')
		const paciente = await fetchFunction(urlGetPacients, secret)
		if (!paciente) return
		if (Array.isArray(paciente)) setListOfPacients(paciente)
	}

	useEffect(() => {
		refreshPacients()
	}, [])
	
	const filteredPacients = listOfPacients?.filter( pacient =>{
		return pacient.nome.toLocaleLowerCase().includes(searchedPacient.toLocaleLowerCase())
	})
	
	return (
		<section className='main-dashboard-container'>
			<PacientDashboardHeader/>
			<div className='flex flex-row pb-1 border-b-[0.916px]'>
				<h3 className='w-[71%] text-left'>Pacientes</h3>
				<nav className='flex flex-row w-full justify-around'>
					
					<input
						type='text'
						placeholder='Buscar paciente...'
						value={searchedPacient}
						onChange={(e)=> setSearchedPacient(e.target.value)}
						className='w-88 border border-zinc-400 rounded px-2 py-1 text-sm text-zinc-500 focus:bg-white focus:outline-none'
						/>
					
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
				{filteredPacients?.map((paciente) => {
					const pacientName = capitalizeWords(paciente.nome)
					
					return (
						<ul
							className={'li-pacient-container'}
							key={paciente.id}
							onClick={() => setActiveId(paciente.id)}
						>
							<li className='li-pacient-name'> {pacientName}</li>
							<li>{paciente.idade} Anos</li>
							<li
								onClick={(e) => {
									e.stopPropagation();
									setSelectedPaciente(paciente);
									setOpenModal(true);
								}}
							>
								<img className='li-pacient-img hover:cursor-pointer' src={eye} />
							</li>
							<li>
								<button 
								className='p-1 bg-green-500 rounded-3xl border border-green-200'
								onClick={() => {
									console.log(paciente.id );
									handleDeletePacients(paciente.id, refreshPacients);
								}}>
									<TrashIcon className="w-4 h-4 bg-transparent hover: cursor-pointer " />
								</button>
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
