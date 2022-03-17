const showData = async (dataLista, element) => {
    
    const products = await dataLista

    products.forEach(prod => {
        const {img, nombre, precio, dcto, precio_dcto} = prod;
        element.innerHTML += `
        <li class="card" style="width: 18rem;>
        <div class="content-product">
            <p class="dcto">${dcto}% dto.</p>
            <div class="img-product-div">
                <img src=${img} class="img-product" />
            </div>
            <div class="precio-dcto">
                <p class="precio-final">$${precio_dcto}/kg</p>
                <p class="precio">$${precio}/kg</p>
            </div>
            <div  class="nombre-producto">
                <p>${nombre}</p>
            </div>
            <button class="btn-agregar" id="btn-agregar">
                Agregar
            </button>


        </li>
        
        `
    })
}

export default showData