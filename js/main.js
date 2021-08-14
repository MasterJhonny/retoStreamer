// calculo del precio de los tiket de cine
const salidaC = document.getElementById('salidaC')
const cantidadPorPrecio = (cantidad) => cantidad * 7

// function del onimput 
const calularPrecio = () => {
    const cantidadP = document.getElementById('cantidad').value;
    if(cantidadP) {
        salidaC.innerText = `Precio total es $${cantidadPorPrecio(parseInt(cantidadP))}`
    } else {
        salidaC.innerText = ''
    }
}


// recuperaciond e datos de los ckecbox para comparacion del 

// function vidar vlores de los checkbox
const check = () => {
    const checkbox = document.getElementsByClassName('checkbox');
    let suma = Array.prototype.reduce.call(checkbox, (sum, val) => {
        return sum += val.checked ? parseInt(val.value) : 0
    }, 0)
    return suma
}
// function para validar cual es mayor
const whenMayor = (a, b) => {
    if(a === b) {
        return a
    } else if(a > b) {
        return a
    } else {
        return b
    }
}

// function para transformation de number for grahp
const transNumber = number => Math.ceil(number/10)

// function graph number
const graphNumber = (valor) => {
    const number = document.getElementById('number') 
    number.innerText = ''
    for(let i = 0; i <= valor; i++) {
        number.innerHTML += `<span>${i*10}</span>`
    }
}

//function graph barras
const graphBarra = (valor, transNumber, barraId) => {
    const barra = document.getElementById(barraId)
    let total = transNumber * 10
    let height = (100 * valor)/total
    barra.style.height = height + '%'
    barra.innerHTML = `${barraId}<span class="barra__br--precio">$${valor}</span>`
}

// function comparar precios
const comparaPrecios = () => {
    const cantidadP = document.getElementById('cantidad').value;
    let precioPlat = check()
    let precioCine = 0
    if(cantidadP && precioPlat) {
        precioCine = cantidadPorPrecio(parseInt(cantidadP))
        // compara Precios y graficar
        let mayorTrans = transNumber(whenMayor(precioCine, precioPlat))
        graphNumber(mayorTrans) 
        // graficar barra cine 
        graphBarra(precioCine, mayorTrans, 'cine')
        // graficar barra streamer
        graphBarra(precioPlat, mayorTrans, 'streamer')
    }
}

