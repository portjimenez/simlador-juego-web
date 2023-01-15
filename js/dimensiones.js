//codigo para saber el ancho y el alto del monitor
var dimensiones = {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ladoTiles: 50,
    escala: 1,
    iniciar: function(){
        window.addEventListener("resize", function(){
            dimensiones.ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            //console.log("Ancho: " + dimensiones.ancho + " | Alto: " + dimensiones.alto);
        });
    },
    obtenerTilesHoorizontales: function(){
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.ancho - ladoFinal)/ladoFinal);
    },
    obtenerTilesVerticales: function(){
        var ladoFinal = dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.alto - ladoFinal)/ladoFinal);
    },
    obtenerTotalTiles: function(){
        return dimensiones.obtenerTilesHoorizontales() * dimensiones.obtenerTilesVerticales();
    }
};