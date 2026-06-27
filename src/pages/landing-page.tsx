// import { useEffect, useState } from "react";
// const secret = localStorage.getItem('token')

//type Pacient = { id?: string; nome: string, idade: number, email: string }

// async function fetchFunction(url:string){

//     const result = await fetch(url, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${secret}` 
//         }
//     })
//     return result.json();
// }

import HeaderLandingPage from "@/components/landing-page/header-landing"
import MainLanding from "@/components/landing-page/main-landing"

export default function LandingPage(){

    // useEffect(() => {
    //     (async () => {
    //         const pacientes = await fetchFunction('http://localhost:3333/get_pacient')
    //         if (Array.isArray(pacientes)) {
    //             setListOfPacients(pacientes)
    //         }
    //     })()
    // }, [])
    
    return(
        <div >
            <HeaderLandingPage />
            <MainLanding />
        </div>
    )
}