let referenceAccessory;
function mostrarEliminar(reference,infproducto){
    referenceAccessory = reference;
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").hide();
    $("#nuevoRegistro").hide();
    $("#titleIdDelete").html("Desea eliminar el producto con la referencia: " + reference + " ?...");    
    $("#idDelete").val(reference);
    $("#productDelete").html(infproducto);
    $("#eliminar").show(1000);
}

/*
    Esta función recibe como parametro la referencia del registro a eliminar,
    ejecuta la petición asincrona al servidor enviando dentro de los datos 
    de la petición registro a eliminar. El tipo de petición es DELETE
*/
function borrarRegistro() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: `http://152.67.44.23:8080/api/cleaningproduct/${referenceAccessory}`,

        type: 'DELETE',

        contentType:"application/JSON",

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        // la respuesta es pasada como argumento a la función
        success: function (respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            $("#mensajes").show(1000);
            //escribe en la consola del desarrollador para efectos de depuración
            Swal.fire("Producto con referencia " + referenceAccessory + " eliminado...");
            $("#mensajes").hide(1000);
            listar();
            estadoInicial();
        },

        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function (xhr, status) {
            Swal.fire("No es posible eliminar el producto" + referenceAccessory + ", por favor verifique...");
            $("#mensajes").show(1000);
        }
    });
}