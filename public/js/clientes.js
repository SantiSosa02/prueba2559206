const validarClientes=() =>{
    const expresionNombres= /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionApellidos= /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionCorreo= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const expresionCelular = /^\d{5,15}$/

    const nombres=document.getElementById("nombres").value;
    const apellidos=document.getElementById("apellidos").value;
    const correo=document.getElementById("correo").value;
    const celular=document.getElementById("celular").value;

    let mensaje="";
    if(!expresionNombres.test(nombres)){
        mensaje +="* El nombre solo debe incluir letras<br><br>";
    }
    if(!expresionApellidos.test(apellidos)){
        mensaje +="* El apellido solo puede tener letras <br><br>";
    }
    if(!expresionCorreo.test(correo)){
        mensaje +="* El correo debe llevar este orden ejemplo@gmail.com <br><br>"
    }
    if(!expresionCelular.test(celular)){
        mensaje +="* El celular solo debe contener numeros <br><br>";
    }
    const alertElement = document.getElementById("mensaje");

if (mensaje.length > 0) {
  alertElement.style.display = "block"; // Mostrar la alerta si hay mensaje
  alertElement.innerHTML = mensaje; // Establecer el contenido del mensaje
} else {
  alertElement.style.display = "none"; // Ocultar la alerta si no hay mensaje
}

}
document.querySelector("#btnRegistrarCliente")
.addEventListener("click",()=>validarClientes());