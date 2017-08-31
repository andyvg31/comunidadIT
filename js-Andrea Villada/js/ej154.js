const estadoJugador=function(jugador){
    mensaje=`El jugador ${jugador.nombre}`
    mensaje+= ` tiene ${jugador.energia} % de energía` 
    mensaje+=  ` y ${jugador.vidas} vidas`
    console.log(mensaje);
}
const jugador={
    nombre:null,
    energia:100,
    vidas:3,

    perderEnergia:function(danio){
        this.energia-=danio;
        if(this.energia<0){
            this.energia=0;
        }

    },
    recuperarEnergia:function(energiaRecuperada){
        if(energiaRecuperada>=0){
            this.energia+=energiaRecuperada;
            if(this.energia>100){
                this.energia=100;
        }
            }
    },
    perderVida:function(){
        this.vidas--;
        if(this.vidas<0){
            this.vidas=0;
        }

    },
    recuperarVida:function(){
          this.vidas++;
        if(this.vidas>99){
            this.vidas=99;
    }
    }
}
jugador.nombre=('juli');
jugador.perderVida();
estadoJugador(jugador);
jugador.perderVida(10);
estadoJugador(jugador);
jugador.perderEnergia(5);
estadoJugador(jugador);
jugador.perderEnergia(15);
estadoJugador(jugador);
jugador.perderEnergia(20);
estadoJugador(jugador);
jugador.recuperarEnergia(10);
estadoJugador(jugador);
jugador.perderVida(30);
estadoJugador(jugador);
jugador.perderVida(40);
estadoJugador(jugador);
jugador.perderVida();
estadoJugador(jugador);
jugador.perderVida();
estadoJugador(jugador);
jugador.recuperarVida();
estadoJugador(jugador);
jugador.recuperarVida();
estadoJugador(jugador);
jugador.recuperarVida();
estadoJugador(jugador);
jugador.perderVida();
estadoJugador(jugador);
