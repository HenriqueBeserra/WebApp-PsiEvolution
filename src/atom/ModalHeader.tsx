import '../css/ModalHeader.css';

type Pacient = {
	id: string;
	nome: string;
	idade: number;
	email: string;
	whats: string;
	nome_responsavel: null;
	contato_responsavel: null;
};

type propsPacient = {
	paciente: Pacient;
};

export default function ModalHeader({ paciente }: propsPacient) {
	const whatsBr = paciente.whats.replace(
		/^(\d{2})(\d{1})(\d{4})(\d{4})$/,
		'+55 $1 $2 $3-$4',
	);

	return (
		<section className='modalheader'>
			<h4 className='modal-title'>
				Seu paciente <span className='paciente-nome'> {paciente.nome}</span>
			</h4>
			<div className='modal-description'>
				<h5>{paciente.email}</h5>
				<h5>{whatsBr}</h5>
			</div>
		</section>
	);
}
