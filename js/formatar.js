'use strict'
import {chamarDelete, chamarPut} from './main.js'

export const montarJson = () => {
    const nomeTexto = String(document.getElementById('nome').value)
    const emailTexto = String(document.getElementById('email').value)
    const cidadeTexto = String(document.getElementById('cidade').value)
    const telefoneTexto = String(document.getElementById('telefone').value)
    const enderecoTexto = String(document.getElementById('endereco').value)
    const fotoTexto = String(document.getElementById('foto').value)

    let contato = {
        nome: nomeTexto ?? '-',
        celular: telefoneTexto ?? '-',
        foto: fotoTexto ?? '-',
        email: emailTexto ?? '-',
        endereco: enderecoTexto ?? '-',
        cidade: cidadeTexto ?? '-'
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
    const acoes = document.createElement('td')
    const img = document.createElement('img')
    const btnEditar = document.createElement('button')
    const btnDeletar = document.createElement('button')


    id.textContent = contato.id ?? '-'
    nome.textContent = contato.nome ?? '-'
    telefone.textContent = contato.celular ?? '-'
    email.textContent = contato.email ?? '-'
    endereco.textContent = contato.endereco ?? '-'
    cidade.textContent = contato.cidade ?? '-'

    btnEditar.textContent = 'Editar'
    btnEditar.onclick = () => chamarPut(contato)
    btnDeletar.textContent = 'Deletar'
    btnDeletar.className = 'deletar'
    btnDeletar.addEventListener('click', () => chamarDelete(contato.id))


    acoes.className = 'acoes'
    acoes.replaceChildren(btnEditar, btnDeletar)

    img.src = contato.foto
    img.className = 'dado-img'
    foto.appendChild(img)

    linha.replaceChildren(id, nome, telefone, email, endereco, cidade, foto, acoes)

    return linha
}

export const montarEdicao = (contato) =>{
    const nomeTexto = document.getElementById('nome')
    const emailTexto = document.getElementById('email')
    const cidadeTexto = document.getElementById('cidade')
    const telefoneTexto = document.getElementById('telefone')
    const enderecoTexto = document.getElementById('endereco')
    const fotoTexto = document.getElementById('foto')



    nomeTexto.value = contato.nome
    emailTexto.value = contato.email
    cidadeTexto.value = contato.cidade
    telefoneTexto.value = contato.celular
    enderecoTexto.value = contato.endereco
    fotoTexto.value = contato.foto
} 

export const montarNovoContato = () =>{
    const nomeTexto = String(document.getElementById('nome').value)
    const emailTexto = String(document.getElementById('email').value)
    const cidadeTexto = String(document.getElementById('cidade').value)
    const telefoneTexto = String(document.getElementById('telefone').value)
    const enderecoTexto = String(document.getElementById('endereco').value)
    const fotoTexto = String(document.getElementById('foto').value)

    let contato = {
        nome: nomeTexto ?? '-',
        celular: telefoneTexto ?? '-',
        foto: fotoTexto ?? '-',
        email: emailTexto ?? '-',
        endereco: enderecoTexto ?? '-',
        cidade: cidadeTexto ?? '-'
    }

    return contato
}