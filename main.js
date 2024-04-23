function templateNota(){
    const div = document.createElement('div')
    div.className='nota'
    div.id='nota'
    div.contentEditable = true
    const texto = document.createTextNode('edita la nota ')
    div.appendChild(texto)
    const root = document.getElementById('root')
    root.appendChild(div)
    btnAgregar.disabled=true
    // creamos el btn guardar
    const btnGuardar= document.createElement('button')
    const textBtnGuardar= document.createTextNode('Guardar Nota')
    btnGuardar.appendChild(textBtnGuardar)
    btnGuardar.onclick= function (){
        setLocalInfo(nota)
        document.getElementById('nota').remove()
        btnGuardar.remove()
        btnAgregar.disabled=false
        showInfo()
    }
    root.appendChild(btnGuardar)
}
// button agregar nota
const btnAgregar = document.createElement('button')
btnAgregar.onclick=templateNota
const textBtnAgregar= document.createTextNode('Agrega nota')
btnAgregar.appendChild(textBtnAgregar)
root.appendChild(btnAgregar)
// button borrar notas
//boton con id btn-clean-notas
const btnCleanNotas = document.createElement('button')
btnCleanNotas.onclick=function(){
    cleanInfo()
}
const textBtnCleanNotas = document.createTextNode('Limpiar Notas')
btnCleanNotas.appendChild(textBtnCleanNotas)
root.appendChild(btnCleanNotas)
document.addEventListener('DOMContentLoaded',function(){
    showInfo();
})
//crear el div con id show-notas
const showNotas = document.createElement('div')
showNotas.id= 'show-notas'
root.appendChild(showNotas)
// crear bo
document.getElementById('btn-add-nota').addEventListener('click', function(){
    getInfo(nota)
    setLocalInfo(nota)
    showInfo()
})
document.getElementById('btn-clean-notas').addEventListener('click', function(){
    cleanInfo()
    showInfo()
})
// recoger la información
function getInfo(){
    // capturamos lo que el usuario introduce
    let nota = document.getElementById('nota').innerHTML
    console.log(nota)
    return nota
}
// alamacenarla en localStorage
function setLocalInfo(nota){
    // guardaría la info en localStorage
    const clave = Date.now();
  localStorage.setItem(clave,getInfo(nota))
}
// leerla y sacarla por pantalla
function showInfo(){
    // leerla y mostrarla por pantalla
    //  sino hay notas mostra no hay nada
    // limpiamos la pantalla
    document.getElementById('show-notas').innerHTML= ''
    for (let index = 0; index < localStorage.length; index++) {
        let clave = localStorage.key(index)
        let valor = localStorage[clave]
        console.log(valor)
        let elemento = `
        <div class='lista-notas'>
        ${valor}
        </div>
        `
        document.getElementById('show-notas').innerHTML+= elemento
    }
}
// limpiarla
function cleanInfo(){
    // limpiar el local storage y limpiar la pantaal
    // Elimina todos los elementos
localStorage.clear();
   showInfo();
}