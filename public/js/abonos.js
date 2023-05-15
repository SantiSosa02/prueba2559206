const validarAbono=()=>{

    const expresionNumeroFactura=/^\d{1,500}$/
    const expresionValorAbono=/^\d{1,3}(?:\.\d{3})*(?:\.\d+)?$/


    const numeroFactura=document.getElementById('numeroFactura').value;
    const valorAbono=document.getElementById('valorAbono').value;

    let mensaje="";

    if(!expresionNumeroFactura.test(numeroFactura)){
        mensaje +="* El numeo de factura solo puede incluir numeros<br><br>";
    }
    if(!expresionValorAbono.test(valorAbono)){
        mensaje +="* El valor del abono solo puede contener numeros ejemplo<br><br> 12.000"
    }
    const alertElement=document.getElementById("mensaje");

    if(mensaje.length>0){
        alertElement.style.display="block";
        alertElement.innerHTML=mensaje;
    }else{
        alertElement.style.display="none";
    }
}
document.querySelector("#btnRegistrarAbono")
.addEventListener('click',()=>validarAbono())