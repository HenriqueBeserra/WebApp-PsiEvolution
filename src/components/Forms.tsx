import '../css/Forms.css';
import { useState } from 'react';
import { handleSubmit } from '../functions/handle-submit-login';
import {useNavigate} from 'react-router-dom';

export default function LoginForm() {
	const navigate = useNavigate()
	const [userLogin, setUserLogin] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [erro, setError] = useState('');

	async function onSubmit(){
		const result = await handleSubmit({
			userLogin: userLogin,
			userPassword: userPassword
		}, setError)

		if(result?.success){
			setInterval(()=>{
				navigate('/home')
			},1200)
		}
	}

	return (
		<div className='form-container'>
			<label className='form-label'>
				<p className='p-form-label'>Olá, psi!</p>
				Vamos entrar na plataforma
			</label>

			<input
				type='email'
				name='email-input'
				id=''
				placeholder='Email'
				onChange={(element) => setUserLogin(element.target.value)}
				value={userLogin}
			/>

			<input
				type='password'
				name='password'
				placeholder='Password'
				onChange={(psswElement) => setUserPassword(psswElement.target.value)}
				value={userPassword}
			/>

			<button
				onClick={() => {
					onSubmit()
				}}
			>
				Login
			</button>
			{erro && <p>Ops {erro}</p>}
		</div>
	);
}
