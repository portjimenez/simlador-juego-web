function EstadoMapamundi(idEstado, rutaMapaJSON, xInicial, yInicial){
    var that = this;
    this.mapaListo = false;
    this.mapa = null;
    this.jugadorMapamundi = null;
    ajax.cargarArchivo(rutaMapaJSON, function(objetoJSON){
        that.mapa = new Mapa(objetoJSON, idEstado);
        that.mapaListo = true;
        that.jugadorMapamundi = new JugadorMapamundi(new Punto(xInicial,yInicial), idEstado);
        console.log("Mapa cargado por ajax");
    });
}

EstadoMapamundi.prototype.actualizar = function(registroTemporal){
    if(!this.mapaListo || this.mapa == null || this.jugadorMapamundi == null){
        return;
    }
    this.jugadorMapamundi.actualizar(registroTemporal, this.mapa);
    this.mapa.actualizar(registroTemporal, this.jugadorMapamundi.posicionEnMapaEnPixeles);

    let localizacionAtravesada = false;

    for(var i = 0; i < this.mapa.rectangulosLocalizaciones.length; i++){
        let rActual = this.mapa.rectangulosLocalizaciones[i].rectangulo;
        let nombre = this.mapa.rectangulosLocalizaciones[i].nombre;
        let rTemporal = new Rectangulo(rActual.x + this.mapa.posicion.x,
            rActual.y + this.mapa.posicion.y, rActual.ancho, rActual.alto);
        let objetoEntradaLocalizacion = null;
        if(rTemporal.cruzar(this.jugadorMapamundi.rectanguloGeneral)){
            localizacionAtravesada = true;
            objetoEntradaLocalizacion = registroLocalizaciones.obtenerLocalizacion(nombre);
            if(!popup.visible){
                popup.mostrar(dimensiones.ancho / 2 - 150, dimensiones.alto / 2 - 100, 300, nombre);
            }

            if(teclado.teclaPulsada(controlesTeclado.entrarLocalizacion)){
                maquinaEstados.cambiarEstado(listadoEstados.NIVEL, objetoEntradaLocalizacion);
                console.log("Entrando");
            }
        }
    }

    if(!localizacionAtravesada && popup.visible){
        popup.ocultar();
    }

    if(teclado.teclaPulsada(controlesTeclado.inventario) && inventario.visible){
        inventario.ocultar(registroTemporal);
    }
    if(teclado.teclaPulsada(controlesTeclado.inventario) && !inventario.visible){
        inventario.mostrar(50, 50, registroTemporal);
    }

}

EstadoMapamundi.prototype.dibujar = function(){
    if(!this.mapaListo){
        return;
    }
    this.mapa.dibujar();
}