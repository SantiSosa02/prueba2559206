const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port =8081;

app.use ( express.static('public'));
app.set("views",path.join(__dirname+ "/public/views"));
app.set("view engine","hbs");
hbs.registerPartials(__dirname+ '/public/views/partials');

app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/",(req,res)=>{
    const clientes=[
        {
            id:1,
            nombre:'Santiago',
            apellido:'Sosa',
            telefono:12345,
            correo:'santi345@gmail.com',
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Carlos',
            apellido:'adf',
            telefono:12345,
            correo:'dfgdfg@gmail.com',
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Alejandro',
            apellido:'sdfsdfg',
            telefono:12456456,
            correo:'alejo@gmail.com',
            estado:'Activo'
        },
        {
            id:4,
            nombre:'Alejandro',
            apellido:'sdfsdfg',
            telefono:12456456,
            correo:'alejo@gmail.com',
            estado:'Activo'
        }
    ]
    res.render("home",{
        lista_clientes:clientes
    });
});
app.get("/clientes",(req,res)=>{
    const clientes=[
        {
            id:1,
            nombre:'Santiago',
            apellido:'Sosa',
            telefono:12345,
            correo:'santi345@gmail.com',
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Carlos',
            apellido:'adf',
            telefono:12345,
            correo:'dfgdfg@gmail.com',
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Alejandro',
            apellido:'sdfsdfg',
            telefono:12456456,
            correo:'alejo@gmail.com',
            estado:'Inactivo'
        }
    ]
    res.render("clientes/clientes",{
        lista_clientes:clientes
    });
});
app.get("/categorias",(req,res)=>{
    const categorias=[
        {
            id:1,
            nombre:'Repuestos',
            descripcion:'Repuestos mtb',
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Ropa',
            descripcion:'Badanas mtb',
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Llantas',
            descripcion:'llantas mtb',
            estado:'Inactivo'
        }
    ]
    res.render("categorias/categorias",{
        lista_categorias:categorias
    });
});
app.get("/usuarios",(req,res)=>{
    const usuarios=[
        {
            id:1,
            nombre:'Santiago',
            apellido:'Sosa',
            correo:'santiago@gmail.com',
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Santiago',
            apellido:'Sosa',
            correo:'santiago@gmail.com',
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Santiago',
            apellido:'Sosa',
            correo:'santiago@gmail.com',
            estado:'Inactivo'
        }
    ]
    res.render("usuarios/usuarios",{
        lista_usuarios:usuarios
    });
});
app.get("/productos",(req,res)=>{
    const productos=[
        {
            id:1,
            nombre:'Guantes gw',
            categoria:'Accesorios',
            stock:6,
            cantidad:'8',
            precioVenta:50000,
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Guantes gw',
            categoria:'Accesorios',
            stock:2,
            cantidad:'8',
            precioVenta:50000,
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Guantes gw',
            categoria:'Accesorios',
            stock:15,
            cantidad:'8',
            precioVenta:50000,
            estado:'Inactivo'
        }
    ]
    res.render("productos/productos",{
        lista_productos:productos
    });
});
app.get("/servicios",(req,res)=>{
    const servicios=[
        {
            id:1,
            nombre:'Lavada',
            precioVenta:30000,
            estado:'Activo'
        },
        {
            id:2,
            nombre:'Mantenimiento',
            precioVenta:60000,
            estado:'Activo'
        },
        {
            id:3,
            nombre:'Inflada',
            precioVenta:500,
            estado:'Inactivo'
        }
    ]
    res.render("servicios/servicios",{
        lista_servicios:servicios
    });
});
app.get("/ventas",(req,res)=>{
    const ventas=[
        {
            id:1,
            cliente:'Santiago sosa',
            fechaVenta:'2023/06/06',
            numeroFactura:'123',
            metodoPago:'Efectivo',
            valor:60000 ,
            estado:'Activo'
        },
        {
            id:2,
            cliente:'Carlos morales',
            fechaVenta:'2023/06/06',
            numeroFactura:'56',
            metodoPago:'Transferencia',
            valor:90000 ,
            estado:'Inactivo'
        },
        {
            id:3,
            cliente:'Santiago sosa',
            fechaVenta:'2023/06/06',
            numeroFactura:'123',
            metodoPago:'Efectivo',
            valor:60000 ,
            estado:'Activo'
        }
    ]
    res.render("ventas/ventas",{
        lista_ventas:ventas
    });
});
app.get('/detalleVenta',(req,res)=>{
    const productosVenta=[
        {
            producto:"Termo",
            cantidad:2,
            precio:20000
        }
    ]
    
    const serviciosVenta=[
        {
            servicio:"Mantenimiento",
            cantidad:2,
            precio:20000
        }
    ]
    res.render("ventas/detalleVenta",{
        lista_serviciosVenta:serviciosVenta,
        lista_productosVenta:productosVenta
    })
});
app.get("/abonos",(req,res)=>{
    const abonos=[
        {
            id:1,
            numeroFactura:'436564',
            fechaAbono:'2023/4/56',
            valorAbono:12345,
            valorRestante:300000,
            estado:'Activo'
        },
        {
            id:2,
            numeroFactura:'6564',
            fechaAbono:'2023/8/56',
            valorAbono:20000,
            valorRestante:60000,
            estado:'Activo'
        },
        {
            id:3,
            numeroFactura:'67',
            fechaAbono:'2023/12/56',
            valorAbono:100000,
            valorRestante:0,
            estado:'Inactivo'
        }
    ]
    res.render("abonos/abonos",{
        lista_abonos:abonos
    });
});
app.get('/agregarCliente',(req,res)=>{
    res.render("clientes/agregarCliente")
})
app.get('/editarCliente',(req,res)=>{
    res.render("clientes/editarCliente")
})
app.get('/agregarUsuario',(req,res)=>{
    res.render("usuarios/agregarUsuario")
});
app.get('/editarUsuario',(req,res)=>{
    res.render("usuarios/editarUsuario")
});
app.get('/agregarCategoria',(req,res)=>{
    res.render("categorias/agregarCategoria")
});
app.get('/editarCategoria',(req,res)=>{
    res.render("categorias/editarCategoria")
});
app.get('/agregarProducto',(req,res)=>{
    res.render("productos/agregarProducto")
});
app.get('/editarProducto',(req,res)=>{
    res.render("productos/editarProducto")
});
app.get('/agregarEntrada',(req,res)=>{
    res.render("productos/agregarEntrada")
});
app.get('/agregarServicio',(req,res)=>{
    res.render("servicios/agregarServicio")
});
app.get('/editarServicio',(req,res)=>{
    res.render("servicios/editarServicio")
});
app.get('/prueba',(req,res)=>{
    res.render("prueba")
});
app.get('/agregarVenta',(req,res)=>{
    res.render("ventas/agregarVenta")
});
app.get('/agregarAbono',(req,res)=>{
    res.render("abonos/agregarAbono")
});
app.get('/detalleAbono',(req,res)=>{
    res.render("abonos/detalleAbono")
});
app.get('*',(req,res)=>{
    res.render("errores/404")
})

app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
})