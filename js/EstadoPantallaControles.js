function EstadoPantallaControles(){
    this.rutaImagenTitulo = "img/controles.png";
    this.idHtml = "pantalla-controles";
    this.anchoImagen = "500";
    this.altoImagen = "300";

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
    audio.reproducir(audio.pista1);

    document.getElementsByTagName("body")[0].onclick = function(){
        document.getElementById("pantalla-controles").style.display = "none";

        document.getElementsByTagName("body")[0].onclick = "";

        //cambiar estado a mapamundi
        maquinaEstados.cambiarEstado(listadoEstados.MAPAMUNDI);
    }
}

EstadoPantallaControles.prototype.actualizar = function(registroTemporal){
    console.log("controles");
}

EstadoPantallaControles.prototype.dibujar = function(){
    document.getElementById(this.idHtml).style.transform = 'translate3d(' + (dimensiones.ancho / 2 - this.anchoImagen / 2) + 'px, ' + (dimensiones.alto / 2 - this.altoImagen / 2 + this.movimientoY) + 'px, 0)';

}