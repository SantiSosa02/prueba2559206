const validarEntradaProducto=() =>{

    const expresionCantidad= /^\d{1,500}$/

 


    const cantidad=document.getElementById("cantidad").value;



    let mensaje="";
   
    if(!expresionCantidad.test(cantidad)){
        mensaje +="* La cantidad solo puede incluir numeros <br><br>";
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
.addEventListener("click",()=>validarEntradaProducto());