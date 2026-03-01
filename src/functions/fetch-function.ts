
export async function fetchFunction(url: string, secret: string | null) {
    const result = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${secret}` 
        }
    })
    return result.json();
}