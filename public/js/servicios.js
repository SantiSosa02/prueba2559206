const validarServicios=()=>{
    const expresionNombre=/^[a-zA-Z]+ *[a-zA-Z]*$/;
    const expresionDescripcion=/^[a-zA-Z ]{5,150}$/;
    const expresionPrecioVenta=/^\d{1,3}(?:\.\d{3})*(?:\.\d+)?$/;

    const nombre=document.getElementById("nombre").value;
    const descripcion=document.getElementById("descripcion").value;
    const precioVenta=document.getElementById("precioVenta").value;

    let mensaje="";

    if(!expresionNombre.test(nombre)){
        mensaje +="* El nombre solo puede incluir letras<br><br>"
    }
    if(!expresionDescripcion.test(descripcion)){
        mensaje +="* La descripcion solo puede incluir letras <br><br>"
    }
    if(!expresionPrecioVenta.test(precioVenta)){
        mensaje +="* El precio de la venta solo incluye numeros ejemplo<br><br> * 60.000<br><br>* 25.000";
    }
    const alertElement=document.getElementById("mensaje");

    if(mensaje.length>0){
        alertElement.style.display='block';
        alertElement.innerHTML=mensaje;
    }
    else{
        alertElement.style.display='none';
    }
}
document.querySelector("#btnRegistrarServicio")
.addEventListener('click',()=>validarServicios())