//namespace - espacio de nombre
//main loop - bucle principal

//codigo para crear el namespace y el main loop
var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

        //codigo para hacer el contador de aps y fps
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: function(){

    },
    actualizar: function(registroTemporal){
        mando.actualizar();
        maquinaEstados.actualizar(registroTemporal);
        //contador de aps
        buclePrincipal.aps++;
    },
    dibujar: function(registroTemporal){
        maquinaEstados.dibujar();
        //contador de fps
        buclePrincipal.fps++;
    }
};