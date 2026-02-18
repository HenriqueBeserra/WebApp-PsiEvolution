import '../css/Forms.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { handleSubmitLogin } from '../functions/handle-submit-login';
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom';
import {z} from 'zod';

const loginSchema = z.object({
	userLogin: z.string().min(1, {message: 'O email é obrigatório'}),
	userPassword: z.string().min(6,{message: 'A senha deve ter pelo menos 6 caracteres'}),
})

export default function LoginForm() {

	const navigate = useNavigate()

	const [erro, setError] = useState('');

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
		  userLogin: "",
		  userPassword: "",
		},
	  })


	async function onSubmitLogin(data: z.infer<typeof loginSchema>){

		const result = await handleSubmitLogin({
			userLogin: data.userLogin,
			userPassword: data.userPassword
		}, setError)

			if(result?.success){
				setTimeout(() => {
					navigate('/home')
				  }, 1200)
		}

		
	}

	return (
		<form
			id="login-form"
			onSubmit={form.handleSubmit(onSubmitLogin)}
			className='form-container'
		>
			<input
				type='email'
				placeholder='Email'
				{...form.register("userLogin")}
				
			/>
			<input
				type='password'
				placeholder='Password'
				{...form.register("userPassword")}
				
			/>
			{form.formState.errors.userLogin && (
  			<p className='error-message'>{form.formState.errors.userLogin.message}</p>
			)}
			{form.formState.errors.userPassword && (
			<p className='error-message'>{form.formState.errors.userPassword.message}</p>
			)}

			<button
				type='submit'
			>
				Login
			</button>
			{erro && <p>Ops {erro}</p>}
		</form>
	);
}


