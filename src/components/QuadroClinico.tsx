import '../css/Modal.css';
import { useState, useRef, useEffect } from 'react';
type propsPacientID = {
	pacientId: string;
};

export default function QuadroClinico({ pacientId }: propsPacientID) {
	const [editando, setEditando] = useState(false);
	const descricaoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const textoSalvo = localStorage.getItem(pacientId);

		if (descricaoRef.current) {
			descricaoRef.current.innerText = textoSalvo ?? '';
		}
	}, [pacientId]);

	function editar() {
		setEditando(true);
		setTimeout(() => {
			descricaoRef.current?.focus();
		}, 0);
	}

	function salvar() {
		const texto = descricaoRef.current?.innerText || '';
		localStorage.setItem(pacientId, texto); // aqui você salva (localStorage, IndexedDB, backend)
		setEditando(false);
	}

	return (
		<div className='quadro-clinico-container'>
			<h4 className='quadro-clinico-title'>Quadro Clinico do Paciente</h4>

			<div className='sub-header-quadro-clinico'>
				<h5>Anamnese e Observações</h5>
				<>
					{!editando ? (
						<button onClick={editar} className='btn-editar'>
							Editar
						</button>
					) : (
						<button onClick={salvar} className='btn-salvar'>
							Salvar
						</button>
					)}
				</>
			</div>
			<div
				ref={descricaoRef}
				className={`quadro-clinico-descricao ${editando ? 'editando' : ''}`}
				contentEditable={editando}
				suppressContentEditableWarning
			></div>
		</div>
	);
}
