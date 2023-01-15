var teclado = {
    teclas: new Array(),
    iniciar: function(){
        document.onkeydown = teclado.guardarTeclado;
        document.onkeyup = teclado.borrarTecla;
    },
    guardarTeclado: function(e){
        if (teclado.teclas.indexOf(e.key) == -1){
            teclado.teclas.push(e.key);
        }
    },
    borrarTecla: function (e){
        var posicion = teclado.teclas.indexOf(e.key);
        if(posicion !== -1){
            teclado.teclas.splice(posicion, 1);
        }
    },
    teclaPulsada: function(codigoTecla){
        return (teclado.teclas.indexOf(codigoTecla) !== -1) ? true : false;
    }
};