

export async function getPacients(url:string){

    const tkn = localStorage.getItem('token')

    const pacients = await fetch(url, {
        method: "get",
        headers: {
            'content_type': 'application/json',
            'Authorization': `Bearer ${tkn}`
        }
    })

    return pacients
}