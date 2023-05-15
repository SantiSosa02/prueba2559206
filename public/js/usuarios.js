const validarUsuario=() =>{
    const expresionNombres= /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionApellidos= /^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionCorreo= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const expresionPassword =/^(?=.*[A-Z])(?=.*\d{2,})[A-Za-z\d]{6,}$/




    const nombres=document.getElementById("nombres").value;
    const apellidos=document.getElementById("apellidos").value;
    const correo=document.getElementById("correo").value;
    const password=document.getElementById("password").value;

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
    if(!expresionPassword.test(password)){
        mensaje +="* La contraseña debe contener al menos una mayuscula, minimo un numero <br><br>Ejemplo : Pass123word ";
        
    }
    const alertElement = document.getElementById("mensajeU");

if (mensaje.length > 0) {
  alertElement.style.display = "block"; // Mostrar la alerta si hay mensaje
  alertElement.innerHTML = mensaje; // Establecer el contenido del mensaje
} else {
  alertElement.style.display = "none"; // Ocultar la alerta si no hay mensaje
}

}
// Obtén los elementos del checkbox y del campo de contraseña
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.querySelector(".password_field");

// Agrega un evento al checkbox para cambiar el tipo de campo de contraseña
togglePassword.addEventListener("change", function() {
    if (togglePassword.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

document.querySelector("#btnRegistrarUsuario")
.addEventListener("click",()=>validarUsuario());