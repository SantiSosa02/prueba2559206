const validarCategoria=()=>{

    const expresionNombre =/^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionDescripcion=/^[a-zA-Z ]{5,150}$/

    const nombre=document.getElementById("nombre").value;
    const descripcion=document.getElementById("descripcion").value;

    let mensaje="";

    if(!expresionNombre.test(nombre)){
        mensaje +="* El nombre solo puede incluir letras<br><br>"
    }
    if(!expresionDescripcion.test(descripcion)){
        mensaje +="* La descripcion solo puede incluir letras"
    }

    const alertElement=document.getElementById("mensaje");

    if (mensaje.length > 0) {
        alertElement.style.display = "block"; // Mostrar la alerta si hay mensaje
        alertElement.innerHTML = mensaje; // Establecer el contenido del mensaje
      } else {
        alertElement.style.display = "none"; // Ocultar la alerta si no hay mensaje
      }
      
      }
      
      document.querySelector("#btnRegistrarCategoria")
      .addEventListener("click",()=>validarCategoria());

