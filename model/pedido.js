module.exports = {
    obtener : function(conexion, funcion){
        conexion.query("SELECT * FROM pedido", funcion)
    },
    insertar : function(conexion, datos, funcion){
        conexion.query("INSERT INTO pedido (id_pedido, nombre, descripcion) VALUES (?,?,?)",[datos.id,datos.nombre,datos.descripcion], funcion)
    },
    retornarDatosID:function(conexion, id, funcion){
        conexion.query("SELECT * FROM pedido WHERE id_pedido=?",[id], funcion)
    },
    borrar:function(conexion, id, funcion){
        conexion.query("DELETE FROM pedido WHERE id_pedido=?",[id], funcion);
    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE pedido SET Id_Pedido=? WHERE id_pedido=?",[datos.id, datos.id], funcion);
        conexion.query("UPDATE pedido SET nombre=? WHERE id_pedido=?",[datos.nombre, datos.id], funcion);
        conexion.query("UPDATE pedido SET descripcion=? WHERE id_pedido=?",[datos.descripcion, datos.id], funcion);
    }


}