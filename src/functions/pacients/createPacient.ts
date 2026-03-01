const url = 'http://localhost:3333/create_pacient'

type paciente = {
    nome:string,
    idade: number,
    email:string,
    whats: string,
    nome_responsavel?:string,
    contato_responsavel?:string
}

export async function createPacients(data: paciente, setErro: any){

    const tkn = localStorage.getItem('token')

    // API expects optional fields as string or omitted — never null (Zod rejects null)
    const userData: Record<string, string | number> = {
        nome: data.nome.trim(),
        idade: data.idade,
        email: data.email.trim().toLowerCase(),
        whats: data.whats.replace(/\D/g, ''),
    }
    if (data.nome_responsavel?.trim()) userData.nome_responsavel = data.nome_responsavel.trim()
    if (data.contato_responsavel?.trim()) userData.contato_responsavel = data.contato_responsavel.replace(/\D/g, '')

    try {
        const apiResponse = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tkn}`
            },
            body: JSON.stringify(userData)
        })

        if (apiResponse.ok) {
            return { success: true, message: "Usuário criado!" }
        }

        const errBody = await apiResponse.json().catch(() => ({}))
        const message = errBody?.message ?? errBody?.error ?? `Erro ${apiResponse.status}`
        
        setErro(typeof message === 'string' ? message : JSON.stringify(message))
        return undefined
    } catch (error) {
        setErro(error instanceof Error ? error.message : String(error))
        return undefined
    }
}