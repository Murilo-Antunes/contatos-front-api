'use strict'

const URL = 'https://bakcend-fecaf-render.onrender.com/contatos'
const salvar = document.getElementById('salvar')
import {montarJson, montarLinha} from './formatar.js'

const getContatos = async () =>{
    const response = await fetch(URL)
    
    
    if(!response.ok) 
        throw new Error('Erro ao buscar Contatos')

    return await response.json()
} 

const inserirContato = async (contato) =>{
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

const chamarPost = (event) =>{
    let contato = montarJson()
    console.log(contato)
}

const chamarGet = async () =>{
    let contatos = await getContatos()
    console.log(contatos)
    let linha = contatos.map(montarLinha)

    const tbody = document.getElementById('tbody')

    tbody.replaceChildren(...linha)
}

salvar.addEventListener('click', chamarPost)

chamarGet()
