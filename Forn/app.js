const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (confirmar)=> {
    confirmar.preventDefault()
    cadastrar()
})

function cadastrar(confirmar){
   let nome = document.getElementById('nome').value
   let telefone = document.getElementById('telefone').value
   let cpf = document.getElementById('cpf').value
   let email = document.getElementById('email').value
   let senha = document.getElementById('senha').value
   let cep = document.getElementById('cep').value
   
   const dados = document.getElementById('dados')
   dados.innerHTML = `   
        <div>Nome: ${nome}</div>
        <div>Telefone: ${telefone}</div>
        <div>Cpf: ${cpf}</div>
        <div>Email: ${email}</div>
        <div>Senha: ${senha}</div>
        <div>Cep: ${cep}</div>
        `

        
}


