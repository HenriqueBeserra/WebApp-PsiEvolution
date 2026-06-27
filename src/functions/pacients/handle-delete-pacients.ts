export async function handleDeletePacients(id:string, refreshPacients: {(): Promise<void>; (): void}){
    const deletePacientsUrl = 'http://localhost:3333/delete_pacient';
    const secret = await localStorage.getItem('token');

    const resposta = window.confirm('Realmente deseja excluir esse usuário?')
    if(resposta){
        const apiResponse = await fetch(deletePacientsUrl, {
            method: "delete",
            headers: {
              "Content-Type":"application/json",
              "Authorization":`Bearer ${secret}`,
            },
            body: JSON.stringify({ "id": id.trim() })
          });
      
          if(apiResponse.ok){
              refreshPacients();
              window.alert('Paciente Deletado')
          }else{
              window.alert("Erro ao deletar paciente");
          }
    }else{
        return;
    }
    
    
}       