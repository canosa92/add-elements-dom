 // Creamos las variables y la funcion para añadir 

const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');
const alert = document.getElementById('alert');
const  punto = document.createElement('li')


boton.addEventListener('mouseover', function(){
alert.innerHTML = '<h4 id="advertencia">Recuerda añade <strong><mark>SOLO</strong> productos esenciales, no estamos para <mark>derroches </mark></h4>'
})

boton.addEventListener('click' , function(){
    const producto = prompt('Añade tu producto')
    const  punto = document.createElement('li')
    punto.innerHTML = `<input type="checkbox" name="checkbox">${producto}`
    lista.appendChild(punto)   

    punto.addEventListener('click', function(){
          punto.classList.add('comprado')
    })

    punto.addEventListener('dblclick', function(){
        punto.classList.remove('comprado')
    })
})//creamos elementos para borrar elementos

 // Aquí tu código
