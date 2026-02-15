import { useState } from 'react';
import LeftbarOptions from './LeftbarOptions/LeftbarOptions';
import MainDashboardPacient from './MainDashboard/MainDashboardPaciente';
import MainDashboardEvolucoes from './MainDashboard/MainDashboardEvolucoes';
import '../../css/HomePage.css';

type View = 'paciente' | 'evolucao';

export default function HomePage() {
	const [view, setView] = useState<View>('paciente');

	return (
		<div className='home-page-container'>
			<LeftbarOptions view={view} onChangeView={setView} />
			<div className='main-content'>
				{view === 'paciente' && <MainDashboardPacient />}
				{view === 'evolucao' && <MainDashboardEvolucoes />}
			</div>
		</div>
	);
}
