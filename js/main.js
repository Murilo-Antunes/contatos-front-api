'use strict'

const URL = 'https://bakcend-fecaf-render.onrender.com/contatos'
import {montarJson, montarLinha, montarEdicao, montarNovoContato} from './formatar.js'

export const getContatos = async () =>{
    const response = await fetch(URL)
    
    
    if(!response.ok) 
        throw new Error('Erro ao buscar Contatos')

    return await response.json()
} 

export const inserirContato = async (contato) =>{
    const OPTIONS ={
        method  : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)   
    }

    const response = await  fetch(URL, OPTIONS)

    if(!response.ok)
        throw new Error ('Erro a criar um novo contato')

    return await response.json()
}

export const deletarContato = async (id) =>{
    const OPTIONS = {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    }

    const response = await fetch(`${URL}/${id}` , OPTIONS)

    if(!response.ok) throw new Error('Erro ao apagar um contato')
    return true
}

export const editarContato = async (contato, id) =>{
    const OPTIONS  = {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(`${URL}/${id}`, OPTIONS)

    if(!response.ok) throw new Error('Erro ao atualizar um contato')
    return response
}


// ----------------- CHAMAR -----------------

export const chamarPost = (event) =>{
    event.preventDefault()
    let contato = montarJson()
    inserirContato(contato)
}

export const chamarGet = async () =>{
    let contatos = await getContatos()
    let linha = contatos.map(montarLinha)

    const tbody = document.getElementById('tbody')

    tbody.replaceChildren(...linha)
}

export const chamarPut = async (contato) =>{
    montarEdicao(contato)
    const salvar = document.getElementById('salvar')
    let id = contato.id

    salvar.removeEventListener('click', chamarPost)
    salvar.addEventListener('click', (event) => { 
        event.preventDefault()
        let novoContato = montarNovoContato()
        editarContato(novoContato, id)

    })
}

export const chamarDelete = async (id) =>{
    let confirmacao = confirm('deseja apagar esse contato?')

    if(confirmacao){
        await deletarContato(id)
    }
}
