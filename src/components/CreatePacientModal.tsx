import AddUserForm from '@/atom/AddUserForm';
import '../css/Modal.css';



type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	onSuccess?: () => void;
};

export default function CreatePacientModal({ isOpen, onClose, onSuccess }: ModalProps) {
	if (!isOpen) return null;

	return (
		<div className='modal-createpacient-overlay' onClick={onClose}>
           <div className='modal-createpacient-content' onClick={(e) => e.stopPropagation()}>
                <h3>Adicione Seu Novo Paciente</h3>
                <section>
                    <AddUserForm onSuccess={onSuccess} />
                </section>
           </div>
		</div>
	);
}
