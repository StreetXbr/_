const prox = document.querySelector('#prox')
const ant = document.querySelector('#ant')
const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')
const item3 = document.querySelector('#item3')
const item4 = document.querySelector('#item4')
const item5 = document.querySelector('#item5')
const item6 = document.querySelector('#item6')
const item7 = document.querySelector('#item7')
const item8 = document.querySelector('#item8')
const item9 = document.querySelector('#item9')
const item10 = document.querySelector('#item10')
const item11 = document.querySelector('#item11')
const item12 = document.querySelector('#item12')

const imagens = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12]

let exibida = 0

prox.addEventListener('click',proxima)
ant.addEventListener('click',anterior)


function proxima(){
    exibida++
    if(exibida > imagens.length -1){
        exibida = 0
    }
    atualizar()
}

function anterior(){
    exibida--
    if(exibida < 0){
        exibida = imagens.length - 1
    }
    atualizar()
}

function atualizar(){
    imagens.forEach((img,index) =>{
        img.style.display = (index === exibida) ? 'block' : 'none'
    })
}






