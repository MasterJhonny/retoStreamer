
const salidaC = document.getElementById('salidaC')

const cantidadPorPrecio = (cantidad) => cantidad * 7


const calularPrecio = () => {
    const cantidadP = document.getElementById('cantidad').value;
    if(cantidadP) {
        salidaC.innerText = `el precio es $${cantidadPorPrecio(parseInt(cantidadP))}`
    } else {
        salidaC.innerText = ''
    }
}