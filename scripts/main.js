import { getData } from "./getData.js"
import showData from "./showData.js"


const element = document.querySelector('.list-group')
const urlProductos = 'https://productostienditaapp.herokuapp.com/productos/'

document.addEventListener('DOMContentLoaded', () => {
    const data = getData(urlProductos)
    showData(data, element)
})

// 