const validarProductos=() =>{
    const expresionNombres= /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionCantidad= /^\d{1,500}$/
    const expresionPrecioVenta=/^\d{1,3}(?:\.\d{3})*(?:\.\d+)?$/
 

    const nombre=document.getElementById("nombre").value;
    const cantidad=document.getElementById("cantidad").value;
    const precioVenta=document.getElementById("precioVenta").value;


    let mensaje="";
    if(!expresionNombres.test(nombre)){
        mensaje +="* El nombre solo debe incluir letras<br><br>";
    }
    if(!expresionCantidad.test(cantidad)){
        mensaje +="* La cantidad solo puede incluir numeros <br><br>";
    }
    if(!expresionPrecioVenta.test(precioVenta)){
        mensaje +="* El precio de la venta solo incluye numeros ejemplo<br><br> * 60.000<br><br>* 25.000";
    }
    const alertElement = document.getElementById("mensaje");

if (mensaje.length > 0) {
  alertElement.style.display = "block"; // Mostrar la alerta si hay mensaje
  alertElement.innerHTML = mensaje; // Establecer el contenido del mensaje
} else {
  alertElement.style.display = "none"; // Ocultar la alerta si no hay mensaje
}

}
document.querySelector("#btnRegistrarProducto")
.addEventListener("click",()=>validarProductos());