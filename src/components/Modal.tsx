import ModalHeader from '../atom/ModalHeader';
import '../css/Modal.css';
import Evolucao from './Evolucoes';
import QuadroClinico from './QuadroClinico';

type paciente = {
	id: string;
	nome: string;
	idade: number;
	email: string;
	whats: string;
	nome_responsavel: null;
	contato_responsavel: null;
} | null;

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	paciente: paciente;
};

export default function Modal({ isOpen, onClose, paciente }: ModalProps) {
	if (!isOpen || !paciente) return null;

	return (
		<div className='modal-overlay' onClick={onClose}>
			<div className='modal-content' onClick={(e) => e.stopPropagation()}>
				<div className='modal-header'>
					<h5 className='modal-title'>Gestão de paciente </h5>
					<button className='button-close' onClick={onClose}>
						X
					</button>
				</div>

				<div className='modal-body'>
					<ModalHeader paciente={{ ...paciente }} />
					<div className='main-modal-body'>
						<QuadroClinico pacientId={paciente.id} />
						<Evolucao />
					</div>
				</div>
			</div>
		</div>
	);
}
