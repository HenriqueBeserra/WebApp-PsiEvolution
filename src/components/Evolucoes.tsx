import '../css/Modal.css';
// import { getPacients } from '../functions/pacients/getPacients';
//url para pacientes: http://localhost:3333/get_pacient

// {/* {Array.isArray(pacientes) && pacientes.map((paciente: any, idx: number) => (
// 				<div key={paciente.id || idx}>
// 					{paciente.nome}
// 				</div>
// 			))} */}


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
]

export default function Evolucao() {
	// const pacientes = await getPacients('http://localhost:3333/get_pacient')
	
	return 	(
	
	
	
		<div className='evolucao-container'>
					<h4 className='evolucao-title'>Evolução Paciente</h4>

					<div className='sub-header-evolucao'>
						<h5>Gerencie a evolção dos seus Pacientes.</h5>
					</div>
				<div>
				{pacientes.map(paciente => {
					return (
						<div>
							{paciente.nome}
						</div>
					)
				})}
				</div>
			</div>
	)
	

}
