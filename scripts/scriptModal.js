// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modal 2 Agregar productos

// Get the modal
var modalDetalle = document.getElementById("modalBuy");

// Get the button that opens the modal
var btnAgregar = document.getElementById("btn-agregar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnAgregar.onclick = function() {
  modalDetalle.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalDetalle) {
      modalDetalle.style.display = "none";
  }
}
  
var modalCarrito = document.getElementById("modalCarrito");

// Get the button that opens the modal
var btnAgregar = document.getElementById("btn-modal-carrito");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnAgregar.onclick = function() {
  modalCarrito.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modalCarrito) {
      modalCarrito.style.display = "none";
  }
}