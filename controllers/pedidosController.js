var conexion = require('../config/conexion');
const pedido = require('../model/pedido');
var libro = require('../model/pedido');
var borrar = require('fs');

module.exports ={

    index:function(req,res){
        
       pedido.obtener(conexion,function(err,datos){
           console.log(datos);
           res.render('pedidos/index', { title: 'Constructora universal', pedidos:datos});
       });
    
    },
    crear:function(req,res){
        res.render('pedidos/crear');

    },
    guardar:function(req,res){
        console.log(req.body);
        
        pedido.insertar(conexion,req.body,function(err,datos){   
           res.redirect('/pedidos');
     });
    },
    eliminar:function(req, res){
        console.log("recepcion de datos");
        console.log(req.params.id);
        pedido.retornarDatosID(conexion,req.params.id,function(err,registros){

            var nombre = registros[0].Nombre;
           
            if(borrar.existsSync(nombre)){
                borrar.unlinkSync(nombre);
             }
             pedido.borrar(conexion,req.params.id,function(err){
                 res.redirect('/pedidos');
             });
        });
    },
    editar:function(req,res){
        pedido.retornarDatosID(conexion,req.params.id,function(err,registros){
            console.log(registros[0]);
            res.render('pedidos/editar', {pedido:registros[0]});
        });
       
    },
    actualizar: function(req, res){
        console.log(req.body.Id_Pedido);
        console.log(req.body.Nombre);
        console.log(req.body.Descripcion);
        if(req.body.nombre){
        pedido.actualizar(conexion,req.body,function(err){    
        });
        } 
        res.redirect('/pedidos');     
    }

}