function EstadoPantallaTitulo(){
    this.rutaImagenTitulo = "img/titulo.png";
    this.idHtml = "pantalla-titulo";
    this.anchoImagen = "500";
    this.altoImagen = "300";

    this.movimientoY = 0;

    this.framesAnimacion = 0;

    document.getElementById(this.idHtml).style.position = "absolute";
    document.getElementById(this.idHtml).style.width = this.anchoImagen + "px";
    document.getElementById(this.idHtml).style.height = this.altoImagen + "px";
    document.getElementById(this.idHtml).style.background = "url('" + this.rutaImagenTitulo + "')";
    document.getElementById(this.idHtml).style.backgroundClip = "border-box";
    document.getElementById(this.idHtml).style.outline = "1px solid transparent";
    document.getElementById(this.idHtml).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2) + 'px, 0)';

    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";

    //audio
    

    document.getElementsByTagName("body")[0].onclick = function(){
        document.getElementById("pantalla-titulo").style.display = "none";

        document.getElementsByTagName("body")[0].onclick = "";

        //cambiar estado a mapamundi
        maquinaEstados.cambiarEstado(listadoEstados.PANTALLA_CONTROLES);
    }
}

EstadoPantallaTitulo.prototype.actualizar = function(registroTemporal){
    if(this.framesAnimacion < 30){
        this.movimientoY++;
    }
    if(this.framesAnimacion >= 30 && this.framesAnimacion < 90){
        this.movimientoY--;
    }
    if(this.framesAnimacion >= 90 && this.framesAnimacion < 120){
        this.movimientoY++;
    }

    this.framesAnimacion++;

    if(this.framesAnimacion >= 120){
        this.framesAnimacion = 0;
        this.movimientoY = 0;
    }
}

EstadoPantallaTitulo.prototype.dibujar = function(){
    document.getElementById(this.idHtml).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY) + 'px, 0)';

}