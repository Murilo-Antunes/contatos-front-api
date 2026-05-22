'use strict'

export const montarJson = () => {
    const nomeTexto = String(document.getElementById('nome').value)
    const emailTexto = String(document.getElementById('email').value)
    const cidadeTexto = String(document.getElementById('cidade').value)
    const telefoneTexto = String(document.getElementById('telefone').value)
    const enderecoTexto = String(document.getElementById('endereco').value)

    let contato = {
        nome: nomeTexto,
        celular: telefoneTexto,
        foto: '-',
        email: emailTexto,
        endereco: enderecoTexto,
        cidade: cidadeTexto
    }

    return contato
}
    

export const montarLinha = (contato) =>{
    const linha = document.createElement('tr')
    const id = document.createElement('td')
    const nome = document.createElement('td')
    const telefone = document.createElement('td')
    const email = document.createElement('td')
    const endereco = document.createElement('td')
    const cidade = document.createElement('td')
    const foto = document.createElement('td')
    const img = document.createElement('img')

    id.textContent = contato.id
    nome.textContent = contato.nome
    telefone.textContent = contato.celular
    email.textContent = contato.email
    endereco.textContent = contato.endereco
    cidade.textContent = contato.cidade

    img.src = contato.foto
    foto.appendChild(img)

    linha.replaceChildren(id, nome, telefone, email, endereco, cidade, foto)

    return linha
}
