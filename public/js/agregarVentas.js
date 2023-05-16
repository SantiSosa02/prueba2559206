const validarVentas=()=>{
    const expresionCantidad=/^\d{1,500}$/;
    const expresionValorVenta=/^\d{1,3}(?:\.\d{3})*(?:\.\d+)?$/;

    const  cantidad=document.getElementById("cantidad").value;
    const  valorVenta=document.getElementById("valorVenta").value;

    let mensaje="";

    if(!expresionCantidad.test(cantidad)){
        mensaje +="* La cantidad solo puede llevar  numeros <br><br>";
    }
    if(!expresionValorVenta.test(valorVenta)){
        mensaje +="* El precio de la venta solo incluye numeros ejemplo<br><br> * 60.000<br><br>* 25.000";
    }
     const alertElement=document.getElementById("mensaje");

     if(mensaje.length>0){
        alertElement.style.display="block";
        alertElement.innerHTML=mensaje;
     }else{
        alertElement.style.display="none";
     }
}

document.querySelector("#btnRegistrarVenta")
.addEventListener('click',()=>validarVentas())