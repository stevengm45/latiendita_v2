const urlCities = 'https://productostienditaapp.herokuapp.com/ciudades/'
const ciudades = document.querySelector("#select-city")
const form = document.getElementById('form')
const search = document.getElementById('search')
const city = document.getElementsById('buscar-ciudad')

const getCity = async(url) => {
    try {
        const resp = await fetch (url)
        const data = await resp.json()
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: 'No se ha encontrado alguna ciudad',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            showCities(data.results)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}

getCity(urlCities)

const showCities = (ciudades) => {
    ciudades.forEach( ciudad => {
        ciudades.innerHTML += `
        <option value="" class="option-city">
        <div><img src="./img/ubicacionnegra.png" alt="">${nombre}</div>
        </option>
        `
    })
}
