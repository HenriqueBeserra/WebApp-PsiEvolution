import { createPacients } from '@/functions/pacients/createPacient';
import '../css/AddUserForm.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { useState } from 'react';



// Aligned with API: Psievolution createPacientBodySchema + PacientSchema (nome min 3, whats 10+ digits)
const pacientSchema = z.object({
    userName: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    userAge: z.string().min(1, { message: "Idade obrigatória" }).refine((val) => !Number.isNaN(Number(val)) && Number(val) >= 0, { message: "Idade inválida" }),
    userEmail: z.string().min(1, { message: "Email é obrigatório" }),
    userWhats: z.string().min(1, { message: "Contato é obrigatório" }).refine((v) => v.replace(/\D/g, '').length >= 10, { message: "WhatsApp deve ter pelo menos 10 dígitos" }),
    userResponsavel: z.string().optional(),
    userContatoResponsavel: z.string().optional()
})

type AddUserFormProps = {
	onSuccess?: () => void;
};

export default function AddUserForm({ onSuccess }: AddUserFormProps) {
    const [erro, setError] = useState('');
    const [created, setCreated] = useState("");

    const form = useForm<z.infer<typeof pacientSchema>>({
		resolver: zodResolver(pacientSchema),
		defaultValues: {
		  userName: "",
          userAge: "",
          userEmail: "",
          userWhats: "",
          userResponsavel: "",
          userContatoResponsavel: ""
		},
	  })

    async function onSubmitLogin(data: z.infer<typeof pacientSchema>){
        setError("");
        setCreated("");
        const result = await createPacients({
            nome: data.userName,
            idade: Number(data.userAge),
            email: data.userEmail,
            whats: data.userWhats,
            nome_responsavel: data.userResponsavel,
            contato_responsavel: data.userContatoResponsavel
        }, setError)

        if (result?.success) {
            setCreated("Paciente Criado")
            onSuccess?.()
        }
	}

    return(
        <form 
        id='add-pacient'
        onSubmit={form.handleSubmit(onSubmitLogin)}
        className="add-user-form">  


            <input {...form.register('userName')} placeholder='Nome de seu paciente'/>
            <input type="number" {...form.register('userAge')} placeholder='26'/>
            <input {...form.register('userEmail')} placeholder="paciente@gmail.com"/>
            <input {...form.register('userWhats')} placeholder='WhatsApp' />
            <input {...form.register('userResponsavel')} placeholder='Nome responsável'/>
            <input {...form.register('userContatoResponsavel')} placeholder='Contato Responsável'/>
            {form.formState.errors.userEmail && (
			<p className='error-message text-red-600'>{form.formState.errors.userEmail.message}</p>
			)}

            <button className='add-btn' type='submit'>Criar</button>
            {erro && <p>Ops {erro}</p>}
            {created && <p>{created}</p>}
        </form>
    )
}