/* eslint-disable @typescript-eslint/no-explicit-any */
type UserLogin = { userLogin: string; userPassword: string };

export async function handleSubmit({ userLogin, userPassword }: UserLogin,setError: any,) {
	if (!userLogin || !userPassword) {
		throw new Error('Usuário inválido.');
	}

	const userData = {
		login: userLogin,
		password: userPassword,
	};

	//
	try {
		const apiResponse = await fetch('http://localhost:3333/locale', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

	    if (apiResponse.ok) {
			const data = await apiResponse.json();

			const token = data.token
			localStorage.setItem('token', token)

			return data;
    	}

		const errorBody = await apiResponse.json();
		throw new Error(errorBody.message || "Erro ao fazer login");
   		
		
	} catch (err: any) {
		setError(err.message);
	}
}
