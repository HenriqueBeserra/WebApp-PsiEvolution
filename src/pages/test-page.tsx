import { useEffect, useState } from "react";
const secret = localStorage.getItem('token')

type Pacient = { id?: string; nome: string, idade: number, email: string }

async function fetchFunction(url:string){

    const result = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${secret}` 
        }
    })
    return result.json();
}

export default function Barra(){
    const [listOfPacients, setListOfPacients] = useState<Pacient[] | undefined>(undefined)

    useEffect(() => {
        (async () => {
            const pacientes = await fetchFunction('http://localhost:3333/get_pacient')
            if (Array.isArray(pacientes)) {
                setListOfPacients(pacientes)
            }
        })()
    }, [])
    
    return(
        <div className="bg-black-500 text-blue-600 p-4 rounded-lg">
            Sou Psi Online!🚀
    
            {Array.isArray(listOfPacients) && listOfPacients.map((pacient) => (
                <span key={pacient.id ?? pacient.nome} className="flex flex-row">{pacient.nome}</span>
            ))}

        </div>
    )
}