type Props = {
	view: 'paciente' | 'evolucao';
	onChangeView: (view: 'paciente' | 'evolucao') => void;
};

export default function LeftbarOptions({ view, onChangeView }: Props) {
	return (
		<section className='left-bar-options-container'>
			<h2>Evolução de Pacientes</h2>
			<ol>
				<li>
					<button
						className={view === 'paciente' ? 'active' : 'btn-left-options-paciente'}
						onClick={() => onChangeView('paciente')}
					>
						Pacientes
					</button>
				</li>
				<li>
					<button
						className={view === 'evolucao' ? 'active' : 'btn-left-options-evolucao'}
						onClick={() => onChangeView('evolucao')}
					>
						Evoluções
					</button>
				</li>
			</ol>
			<footer>
				© 2026 Henrique Beserra Todos os direitos reservados. Este material não pode ser
				reproduzido sem autorização expressa do autor.
			</footer>
		</section>
	);
}
