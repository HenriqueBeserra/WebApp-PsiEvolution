import '../css/Modal.css';
// import { getPacients } from '../functions/pacients/getPacients';
//url para pacientes: http://localhost:3333/get_pacient

// {/* {Array.isArray(pacientes) && pacientes.map((paciente: any, idx: number) => (
// 				<div key={paciente.id || idx}>
// 					{paciente.nome}
// 				</div>
// 			))} */}


const evolucoes = [
	{
		id: 'bknavetvpr4dgt2fycaq9cf3',
		descricao: 'Paciente reclama de cansasso físico, não consegue dormir por não parar de pensar',
		data: '23/02/2026',
		idUser: 'guzz1vu36hzdd3smi4iyahgh',
	
	},
	{
		id: 'bknavetvpr4dgt2fycaq9cf3',
		descricao: 'Confusão mental menor, sono regulado',
		data: '26/02/2026',
		idUser: 'guzz1vu36hzdd3smi4iyahgh',
	
	},
	
]

export default function Evolucao() {
	// const pacientes = await getPacients('http://localhost:3333/get_pacient')
	
	return 	(
	
		<div className='evolucao-container'>
				<h4 className='evolucao-title'>Evolução Paciente</h4>

				<div className='sub-header-evolucao'>
					<h5 className='text-[0.7rem]'>Gerencie a evolção dos seus Pacientes.</h5>
				</div>
				<div>
					{evolucoes.map(evo => {
						return (
							<div className='p-0.5 m-1'>
								Evolução criada dia <span className='text-green-600'>{evo.data}</span>
							</div>
						)
					})}
				</div>
			</div>
	)
	

}
