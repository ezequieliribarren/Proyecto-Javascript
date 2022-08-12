// // Funciones
function inicioDeSesion () {
    alert("Inicie sesión para acceder a sus eventos favoritos")

let usuario1 = prompt("Ingrese su usuario");
let contrasenia1 = prompt("Ingrese su contraseña");

    if (usuario1 == usuario && contrasenia1 == contrasenia) {
        alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
    }
    
    else if (usuario1 != usuario) {
        alert("El usuario ingresado es incorrecto. Vuelva a intentarlo");
        usuario1 = prompt("Ingrese su usuario");
        contrasenia1 = prompt("Ingrese su contraseña");
    
        if (usuario1 == usuario && contrasenia1 == contrasenia) {
            alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
        }
    
        else {
    
            alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
        }
    }
    
    else if (contrasenia1 != contrasenia) {
        alert("La contraseña ingresada es incorrecta. Vuelva a intentarlo");
        usuario1 = prompt("Ingrese su usuario");
        contrasenia1 = prompt("Ingrese su contraseña");
    
        if (usuario1 == usuario && contrasenia1 == contrasenia) {
            alert("Felicitaciones " + nombre + " has ingresado a tu cuenta ");
        }
    
        else {
    
            alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
        }
    }
    
    else {
    
        alert("Lo sentimos, usted ha agotado los intentos de inicio de sesión. Solicite el recupero de usuario y/o contraseña");
    }
};

function mostrarTablaGral (){
    console.log ("A continuación les mostramos la tabla de posiciones actual: ")
    for(const piloto of pilotos){
        console.log(piloto.piloto);
        console.log(piloto.posicion);
    }
    console.log ("El campeonato tiene un total de " + pilotos.length + " pilotos")
};

function mostrarTablaConstructora () {
    console.log ("Mientras tanto en la tabla de posiciones constructora (por equipo) podemos encontrar el siguiente orden:")
    for(const equipo of equipos){
        console.log(equipo.equipo);
        console.log(equipo.posicion);
    }
    
    console.log ("El campeonato tiene un total de " + equipos.length + " equipos")
}

// Arrays de objetos
const pilotos = [
    {
        piloto: "Max Verstappen",
        numero: 1,
        equipo: "Red Bull Racing",
        posicion: 1,
        puntos: 233,
    },
    {
        piloto: "Charles Leclerc",
        numero: 16,
        equipo: "Ferrari",
        posicion: 2,
        puntos: 170,

    },
    {
        piloto: "Sergio Perez",
        numero: 11,
        equipo: "Red Bull Racing",
        posicion: 3,
        puntos: 163,
    },
    {
        piloto: "Carlos Sainz",
        numero: 55,
        equipo: "Ferrari",
        posicion: 4,
        puntos: 144,

    },
    {
        piloto: "George Russell",
        numero: 63,
        equipo: "Mercedes Benz",
        posicion: 5,
        puntos: 143,
    },
    {
        piloto: "Lewis Hamilton",
        numero: 44,
        equipo: "Mercedes Benz",
        posicion: 6,
        puntos: 127,

    },
    {
        piloto: "Lando Norris",
        numero: 4,
        equipo: "McLaren",
        posicion: 7,
        puntos: 70,
    },
    {
        piloto: "Esteban Ocon",
        numero: 31,
        equipo: "Alpine",
        posicion: 8,
        puntos: 56,
    },
    {
        piloto: "Valtteri Bottas",
        numero: 77,
        equipo: "Alfa Romeo",
        posicion: 9,
        puntos: 46,
    },
    {
        piloto: "Fernando Alonso",
        numero: 14,
        equipo: "Alpine",
        posicion: 10,
        puntos: 37,

    },
    {
        piloto: "Kevin Magnussen",
        numero: 20,
        equipo: "Haas F1 Team",
        posicion: 11,
        puntos: 22,
    },
    {
        piloto: "Daniel Ricciardo",
        numero: 3,
        equipo: "McLaren",
        posicion: 12,
        puntos: 19,

    },
    {
        piloto: "Pierre Gasly",
        numero: 10,
        equipo: "AlphaTauri",
        posicion: 13,
        puntos: 16,
    },
    {
        piloto: "Sebastian Vettel",
        numero: 5,
        equipo: "Aston Martin",
        posicion: 14,
        puntos: 15,

    },
    {
        piloto: "Mick Schumacher",
        numero: 47,
        equipo: "Haas F1 Team",
        posicion: 15,
        puntos: 12,
    },
    {
        piloto: "Yuki Tsunoda",
        numero: 22,
        equipo: "AlphaTauri",
        posicion: 16,
        puntos: 11,

    },
    {
        piloto: "Zhou Guanyu",
        numero: 24,
        equipo: "Alfa Romeo",
        posicion: 17,
        puntos: 5,
    },
    {
        piloto: "Lance Stroll",
        numero: 18,
        equipo: "Aston Martin",
        posicion: 18,
        puntos: 4,

    },
    {
        piloto: "Alexander Albon",
        numero: 23,
        equipo: "Williams",
        posicion: 19,
        puntos: 3,
    },
    {
        piloto: "Nicholas Latifi",
        numero: 6,
        equipo: "Williams",
        posicion: 20,
        puntos: 0,
    },
    {
        piloto: "Niko Hulkenberg",
        numero: 27,
        equipo: "Aston Martin",
        posicion: 21,
        puntos: 0,
    },
    {
        piloto: "Nikita Mazepin",
        numero: 9,
        equipo: "Hass F1 Team",
        posicion: 0 ,
        puntos: 0,
    }

];
pilotos.pop ()

const equipos = [
    {
        equipo: "Red Bull Racing",
        piloto1: "Max Verstappen",
        piloto2: "Sergio Perez",
        posicion: 1,
        puntos: 396,
    },
    {
        equipo: "Ferrari",
        piloto1: "Charles Leclerc",
        piloto2: "Carlos Sainz",
        posicion: 2,
        puntos: 314,
    },
    {
        equipo: "Mercedes Benz",
        piloto1: "George Russell",
        piloto2: "Lewis Hamilton",
        posicion: 3,
        puntos: 270,
    },
    {
        equipo: "Alpine",
        piloto1: "Esteban Ocon",
        piloto2: "Fernando Alonso",
        posicion: 4,
        puntos: 93,
    },

    {
        equipo: "McLaren",
        piloto1: "Lando Norris",
        piloto2: "Daniel Ricciardo",
        posicion: 5,
        puntos: 89,
    },
    {
        equipo: "Alfa Romeo",
        piloto1: "Zhou Guanyu",
        piloto2: "Valtteri Botas",
        posicion: 6,
        puntos: 51,
    },    
    {
        equipo: "Haas F1 Team",
        piloto1: "Kevin Magnussen",
        piloto2: "Mick Schumacher",
        posicion: 7,
        puntos: 34,
    },   
    {
        equipo: "AlphaTauri",
        piloto1: "Pierre Gasly",
        piloto2: "Yuki Tsunoda",
        posicion: 8,
        puntos: 27,
    },
    {
        equipo: "Aston Martin",
        piloto1: "Sebastian Vettel",
        piloto2: "Lance Stroll",
        posicion: 9,
        puntos: 19,
    },

    {
        equipo: "Williams",
        piloto1: "Alexander Albon",
        piloto2: "Nicholas Latifi",
        posicion: 10,
        puntos: 3,
    },

];
const pistas = [
    {
        circuito: "Bahrain International Circuit",
        vueltas: 57,

    },
    {
        circuito: "Jeddah",
        vueltas: 50,

    },
    {
        circuito: "Albert Park",
        vueltas: 58,

    },
    {
        circuito: "Autodromo Enzo e Dino Ferrari",
        vueltas: 63,

    },
    {
        circuito: "Autodromo Internacional de Miami",
        vueltas: 57,

    },
    {
        circuito: "Circuit de Barcelona - Catalunya",
        vueltas: 66,

    },
    {
        circuito: "Monte Carlo",
        vueltas: 78,

    },
    {
        circuito: "Baku City Circuit",
        vueltas: 51,

    },
    {
        circuito: "Circuit Gilles Villeneuve",
        vueltas: 70,

    },
    {
        circuito: "Silverstone",
        vueltas: 52,

    },
    {
        circuito: "Red Bull Ring",
        vueltas: 71,

    },
    {
        circuito: "Paul Ricard",
        vueltas: 53,

    },
    {
        circuito: "Hungaroring",
        vueltas: 70,

    },
    {
        circuito: "Spa - Francorchamps",
        vueltas: 44,

    },
    {
        circuito: "Zandvoort",
        vueltas: 72,

    },
    {
        circuito: "Autodromo Nazionale di Monza",
        vueltas: 53,

    },
    {
        circuito: "Marina Bay Circuit",
        vueltas: 61,

    },
    {
        circuito: "Suzuka",
        vueltas: 53,

    },
    {
        circuito: "Circuito de las Americas",
        vueltas: 56,

    },
    {
        circuito: "Interlagos",
        vueltas: 71,

    },
    {
        circuito: "Yas Marina Circuit",
        vueltas: 58,

    },

    {
        circuito: "Hermanos Rodriguez",
        vueltas: 71,

    },

    

];

const fechas2022 = [ 
{
fecha: new Date (2022, 2, 20,10)
},
{
fecha: new Date (2022, 2, 27,10)
},
{ 
fecha: new Date (2022, 3, 10,10)
}, 
{fecha: new Date (2022, 3, 24,10)
},
{fecha: new Date (2022, 4, 8,10)
}, 
{fecha: new Date (2022, 4, 22,10)
}, 
{fecha: new Date (2022, 4, 29,10)
}, 
{fecha: new Date (2022, 5, 12,10)
}, 
{fecha: new Date (2022, 5, 19,10)
}, 
{fecha: new Date (2022,6, 3,10)
}, 
{
fecha: new Date (2022,6, 10,10)
}, 
{
fecha: new Date (2022, 6, 24,10)
}, 
{
fecha: new Date (2022, 6, 31,10)
}, 
{
fecha: new Date (2022, 7, 28,10)
}, 
{
fecha: new Date (2022, 8, 4,10)
}, 
{
 fecha: new Date (2022, 8, 11,10)
}, 
{
fecha: new Date (2022, 9, 2,10)
}, 
{
fecha: new Date (2022, 9, 9,10)
}, 
{
fecha: new Date (2022, 9, 23,10)
}, 
{
fecha: new Date (2022, 9, 30,10)
}, 
{
fecha: new Date (2022, 10, 13,10)
}, 
{
fecha: new Date (2022, 10, 20,10)
}
];

const calendario = []



// // Registro
// alert("Registrese para estar al tanto de los ultimos datos de F1.");
// let nombre = prompt("Ingrese su nombre");
// let usuario = prompt("Ingrese su usuario");
// let contrasenia = prompt("Ingrese su contraseña");
// let nacionalidad = prompt("Ingrese su nacionalidad");

// alert("Felicitaciones " + nombre + " te has registrado con exito");

// inicioDeSesion();


// // Informacion de la pagina
// mostrarTablaGral();
// mostrarTablaConstructora();


// Solo circuitos (MAP)
const soloCircuitos = pistas.map((el) => el.circuito)

// Generacion de calendario (CLASS - INDEXOF - PUSH - FUNCION CON PARAMETROS)
class evento {
    constructor( circuito, fecha) {
        this.circuito  = circuito
        this.fecha = fecha
    }
}

function generadorCalendario (circ,ubFecha) {

    calendario.push(new evento (pistas [soloCircuitos.indexOf(circ)], fechas2022 [ubFecha] ));
}

function calendar () {
generadorCalendario ("Bahrain International Circuit", 0)
generadorCalendario ("Jeddah", 1)
generadorCalendario ("Albert Park", 2)
generadorCalendario ("Autodromo Enzo e Dino Ferrari", 3)
generadorCalendario ("Autodromo Internacional de Miami", 4)
generadorCalendario ("Circuit de Barcelona - Catalunya", 5)
generadorCalendario ("Monte Carlo", 6)
generadorCalendario ("Baku City Circuit", 7)
generadorCalendario ("Circuit Gilles Villeneuve", 8)
generadorCalendario ("Silverstone", 9)
generadorCalendario ("Red Bull Ring", 10)
generadorCalendario ("Paul Ricard", 11)
generadorCalendario ("Hungaroring", 12)
generadorCalendario ("Spa - Francorchamps", 13)
generadorCalendario ("Zandvoort", 14)
generadorCalendario ("Autodromo Nazionale di Monza", 15)
generadorCalendario ("Marina Bay Circuit", 16)
generadorCalendario ("Suzuka", 17)
generadorCalendario ("Circuito de las Americas", 18)
generadorCalendario ("Hermanos Rodriguez", 19)
generadorCalendario ("Interlagos", 20)
generadorCalendario ("Yas Marina Circuit", 21)
}

calendar ()

// Mejorando Fechas
let fecha1 = new Date (2022, 2, 20,10)
let fe1 = fecha1.getDate () + "/" + fecha1.getMonth () + "/" + fecha1.getFullYear () + " " + fecha1.getHours () + ":" + fecha1.getMinutes () + fecha1.getSeconds () + " hs. (Argentina)";
let fecha2 = new Date (2022, 2, 27,11)
let fe2 = fecha2.getDate () + "/" + fecha2.getMonth () + "/" + fecha2.getFullYear () + " " + fecha2.getHours () + ":" + fecha2.getMinutes () + fecha2.getSeconds () + " hs. (Argentina)";
let fecha3 = new Date (2022, 3, 10,12)
let fe3 = fecha3.getDate () + "/" + fecha3.getMonth () + "/" + fecha3.getFullYear () + " " + fecha3.getHours () + ":" + fecha3.getMinutes () + fecha3.getSeconds () + " hs. (Argentina)";
let fecha4 = new Date (2022, 3, 24,10)
let fe4 = fecha4.getDate () + "/" + fecha4.getMonth () + "/" + fecha4.getFullYear () + " " + fecha4.getHours () + ":" + fecha4.getMinutes () + fecha4.getSeconds () + " hs. (Argentina)";
let fecha5 = new Date (2022, 4, 8,11)
let fe5 = fecha5.getDate () + "/" + fecha5.getMonth () + "/" + fecha5.getFullYear () + " " + fecha5.getHours () + ":" + fecha5.getMinutes () + fecha5.getSeconds () + " hs. (Argentina)";
let fecha6 = new Date (2022, 4, 29,10)
let fe6 = fecha6.getDate () + "/" + fecha6.getMonth () + "/" + fecha6.getFullYear ()+ " " + fecha6.getHours () + ":" + fecha6.getMinutes () + fecha6.getSeconds () + " hs. (Argentina)";
let fecha7 = new Date (2022, 5, 12,11)
let fe7 = fecha7.getDate () + "/" + fecha7.getMonth () + "/" + fecha7.getFullYear () + " " + fecha7.getHours () + ":" + fecha7.getMinutes () + fecha7.getSeconds () + " hs. (Argentina)"; 
let fecha8 = new Date (2022, 5, 19,12)
let fe8 = fecha8.getDate () + "/" + fecha8.getMonth () + "/" + fecha8.getFullYear () + " " + fecha8.getHours () + ":" + fecha8.getMinutes () + fecha8.getSeconds () + " hs. (Argentina)";
let fecha9 = new Date (2022,6, 3,10)
let fe9 = fecha9.getDate () + "/" + fecha9.getMonth () + "/" + fecha9.getFullYear () + " " + fecha9.getHours () + ":" + fecha9.getMinutes () + fecha9.getSeconds () + " hs. (Argentina)";
let fecha10 = new Date (2022,6, 10,11)
let fe10 = fecha10.getDate () + "/" + fecha10.getMonth () + "/" + fecha10.getFullYear () + " " + fecha10.getHours () + ":" + fecha10.getMinutes () + fecha10.getSeconds () + " hs. (Argentina)";
let fecha11 = new Date (2022, 6, 24,12)
let fe11 = fecha11.getDate () + "/" + fecha11.getMonth () + "/" + fecha11.getFullYear () + " " + fecha11.getHours () + ":" + fecha11.getMinutes () + fecha11.getSeconds () + " hs. (Argentina)";
let fecha12 = new Date (2022, 6, 31,10)
let fe12 = fecha12.getDate () + "/" + fecha12.getMonth () + "/" + fecha12.getFullYear () + " " + fecha12.getHours () + ":" + fecha12.getMinutes () + fecha12.getSeconds () + " hs. (Argentina)";
let fecha13 = new Date (2022, 7, 28,11)
let fe13 = fecha13.getDate () + "/" + fecha13.getMonth () + "/" + fecha13.getFullYear () + " " + fecha13.getHours () + ":" + fecha13.getMinutes () + fecha13.getSeconds () + " hs. (Argentina)";
let fecha14 = new Date (2022, 8, 4,12)
let fe14 = fecha14.getDate () + "/" + fecha14.getMonth () + "/" + fecha14.getFullYear () + " " + fecha14.getHours () + ":" + fecha14.getMinutes () + fecha14.getSeconds () + " hs. (Argentina)";
let fecha15 = new Date (2022, 8, 11,10)
let fe15 = fecha15.getDate () + "/" + fecha15.getMonth () + "/" + fecha15.getFullYear () + " " + fecha15.getHours () + ":" + fecha15.getMinutes () + fecha15.getSeconds () + " hs. (Argentina)";
let fecha16 = new Date (2022, 9, 2,11)
let fe16 = fecha16.getDate () + "/" + fecha16.getMonth () + "/" + fecha16.getFullYear () + " " + fecha16.getHours () + ":" + fecha16.getMinutes () + fecha16.getSeconds () + " hs. (Argentina)";
let fecha17 = new Date (2022, 9, 9,12)
let fe17 = fecha17.getDate () + "/" + fecha17.getMonth () + "/" + fecha17.getFullYear () + " " + fecha17.getHours () + ":" + fecha17.getMinutes () + fecha17.getSeconds () + " hs. (Argentina)";
let fecha18 = new Date (2022, 9, 23,10)
let fe18 = fecha18.getDate () + "/" + fecha18.getMonth () + "/" + fecha18.getFullYear () + " " + fecha18.getHours () + ":" + fecha18.getMinutes () + fecha18.getSeconds () + " hs. (Argentina)";
let fecha19 = new Date (2022, 9, 30,11)
let fe19 = fecha19.getDate () + "/" + fecha19.getMonth () + "/" + fecha19.getFullYear () + " " + fecha19.getHours () + ":" + fecha19.getMinutes () + fecha19.getSeconds () + " hs. (Argentina)";
let fecha20 = new Date (2022, 10, 13,12)
let fe20 = fecha20.getDate () + "/" + fecha20.getMonth () + "/" + fecha20.getFullYear () + " " + fecha20.getHours () + ":" + fecha20.getMinutes () + fecha20.getSeconds () + " hs. (Argentina)";
let fecha21 = new Date (2022, 10, 20,10)
let fe21 = fecha21.getDate () + "/" + fecha21.getMonth () + "/" + fecha21.getFullYear () + " " + fecha21.getHours () + ":" + fecha21.getMinutes () + fecha21.getSeconds () + " hs. (Argentina)";
let fecha22 = new Date (2022, 4, 22,12)
let fe22 = fecha22.getDate () + "/" + fecha22.getMonth () + "/" + fecha22.getFullYear () + " " + fecha22.getHours () + ":" + fecha22.getMinutes () + fecha22.getSeconds () + " hs. (Argentina)";


// Interactuando con html (Agregando informacion a los eventos queryselectorAll)
let contEventos = document.querySelectorAll ('.evento')
contEventos[0].innerHTML = `<h4> Circuito: ${calendario[0].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe1} </h4>`; 

contEventos[1].innerHTML = `<h4> Circuito: ${calendario[1].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe2} </h4>`; 

contEventos[2].innerHTML = `<h4> Circuito: ${calendario[2].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe3} </h4>`; 

contEventos[3].innerHTML = `<h4> Circuito: ${calendario[3].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe4} </h4>`; 

contEventos[4].innerHTML = `<h4> Circuito: ${calendario[4].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe5} </h4>`; 

contEventos[5].innerHTML = `<h4> Circuito: ${calendario[5].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe22} </h4>`; 

contEventos[6].innerHTML = `<h4> Circuito: ${calendario[6].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe6} </h4>`; 

contEventos[7].innerHTML = `<h4> Circuito: ${calendario[7].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe7} </h4>`; 

contEventos[8].innerHTML = `<h4> Circuito: ${calendario[8].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe8} </h4>`; 

contEventos[9].innerHTML = `<h4> Circuito: ${calendario[9].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe9} </h4>`; 

contEventos[10].innerHTML = `<h4> Circuito: ${calendario[10].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe10} </h4>`; 

contEventos[11].innerHTML = `<h4> Circuito: ${calendario[11].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe11} </h4>`; 

contEventos[12].innerHTML = `<h4> Circuito: ${calendario[12].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe12} </h4>`; 

contEventos[13].innerHTML = `<h4> Circuito: ${calendario[13].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe13} </h4>`; 

contEventos[14].innerHTML = `<h4> Circuito: ${calendario[14].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe14} </h4>`; 

contEventos[15].innerHTML = `<h4> Circuito: ${calendario[15].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe15} </h4>`; 

contEventos[16].innerHTML = `<h4> Circuito: ${calendario[16].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe16} </h4>`; 

contEventos[17].innerHTML = `<h4> Circuito: ${calendario[17].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe17} </h4>`; 

contEventos[18].innerHTML = `<h4> Circuito: ${calendario[18].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe18} </h4>`; 

contEventos[19].innerHTML = `<h4> Circuito: ${calendario[19].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe19} </h4>`; 

contEventos[20].innerHTML = `<h4> Circuito: ${calendario[20].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe20} </h4>`; 

contEventos[21].innerHTML = `<h4> Circuito: ${calendario[21].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${fe21} </h4>`; 



// Agregando Informacion de Pilotos 

// Nombre del piloto
let selectPiloto = document.querySelectorAll ('.piloto')
selectPiloto [0].innerHTML = `<h4>  ${pilotos [0].piloto} </h4>` 
selectPiloto [1].innerHTML = `<h4>  ${pilotos [1].piloto} </h4>` 
selectPiloto [2].innerHTML = `<h4>  ${pilotos [2].piloto} </h4>` 
selectPiloto [3].innerHTML = `<h4>  ${pilotos [3].piloto} </h4>` 
selectPiloto [4].innerHTML = `<h4>  ${pilotos [4].piloto} </h4>` 
selectPiloto [5].innerHTML = `<h4>  ${pilotos [5].piloto} </h4>` 
selectPiloto [6].innerHTML = `<h4>  ${pilotos [6].piloto} </h4>` 
selectPiloto [7].innerHTML = `<h4>  ${pilotos [7].piloto} </h4>` 
selectPiloto [8].innerHTML = `<h4>  ${pilotos [8].piloto} </h4>` 
selectPiloto [9].innerHTML = `<h4>  ${pilotos [9].piloto} </h4>` 
selectPiloto [10].innerHTML = `<h4>  ${pilotos [10].piloto} </h4>` 
selectPiloto [11].innerHTML = `<h4>  ${pilotos [11].piloto} </h4>` 
selectPiloto [12].innerHTML = `<h4>  ${pilotos [12].piloto} </h4>` 
selectPiloto [13].innerHTML = `<h4>  ${pilotos [13].piloto} </h4>` 
selectPiloto [14].innerHTML = `<h4>  ${pilotos [14].piloto} </h4>` 
selectPiloto [15].innerHTML = `<h4>  ${pilotos [15].piloto} </h4>` 
selectPiloto [16].innerHTML = `<h4>  ${pilotos [16].piloto} </h4>` 
selectPiloto [17].innerHTML = `<h4>  ${pilotos [17].piloto} </h4>` 
selectPiloto [18].innerHTML = `<h4>  ${pilotos [18].piloto} </h4>` 
selectPiloto [19].innerHTML = `<h4>  ${pilotos [19].piloto} </h4>` 
selectPiloto [20].innerHTML = `<h4>  ${pilotos [20].piloto} </h4>` 

// Puntos del Piloto
let posicionPoint = document.querySelectorAll ('.posicionPoints')
posicionPoint[0].innerHTML= `<h4> Puntos: ${pilotos [0].puntos} </h4>` 
posicionPoint[1].innerHTML= `<h4> Puntos: ${pilotos [1].puntos} </h4>` 
posicionPoint[2].innerHTML= `<h4> Puntos: ${pilotos [2].puntos} </h4>` 
posicionPoint[3].innerHTML= `<h4> Puntos: ${pilotos [3].puntos} </h4>` 
posicionPoint[5].innerHTML= `<h4> Puntos: ${pilotos [4].puntos} </h4>` 
posicionPoint[4].innerHTML= `<h4> Puntos: ${pilotos [5].puntos} </h4>` 
posicionPoint[6].innerHTML= `<h4> Puntos: ${pilotos [6].puntos} </h4>` 
posicionPoint[7].innerHTML= `<h4> Puntos: ${pilotos [7].puntos} </h4>` 
posicionPoint[8].innerHTML= `<h4> Puntos: ${pilotos [8].puntos} </h4>` 
posicionPoint[9].innerHTML= `<h4> Puntos: ${pilotos [9].puntos} </h4>` 
posicionPoint[10].innerHTML= `<h4> Puntos: ${pilotos [10].puntos} </h4>` 
posicionPoint[11].innerHTML= `<h4> Puntos: ${pilotos [11].puntos} </h4>` 
posicionPoint[12].innerHTML= `<h4> Puntos: ${pilotos [12].puntos} </h4>` 
posicionPoint[13].innerHTML= `<h4> Puntos: ${pilotos [13].puntos} </h4>` 
posicionPoint[14].innerHTML= `<h4> Puntos: ${pilotos [14].puntos} </h4>` 
posicionPoint[15].innerHTML= `<h4> Puntos: ${pilotos [15].puntos} </h4>` 
posicionPoint[16].innerHTML= `<h4> Puntos: ${pilotos [16].puntos} </h4>` 
posicionPoint[17].innerHTML= `<h4> Puntos: ${pilotos [17].puntos} </h4>` 
posicionPoint[18].innerHTML= `<h4> Puntos: ${pilotos [18].puntos} </h4>` 
posicionPoint[19].innerHTML= `<h4> Puntos: ${pilotos [19].puntos} </h4>` 
posicionPoint[20].innerHTML= `<h4> Puntos: ${pilotos [20].puntos} </h4>` 

// Posicion del piloto
let posicion = document.querySelectorAll ('.posicion')
posicion[0].innerHTML= `<h4> Posición: ${pilotos [0].posicion} </h4>` 
posicion[1].innerHTML= `<h4> Posición: ${pilotos [1].posicion} </h4>` 
posicion[2].innerHTML= `<h4> Posición: ${pilotos [2].posicion} </h4>` 
posicion[3].innerHTML= `<h4> Posición: ${pilotos [3].posicion} </h4>` 
posicion[5].innerHTML= `<h4> Posición: ${pilotos [4].posicion} </h4>` 
posicion[4].innerHTML= `<h4> Posición: ${pilotos [5].posicion} </h4>` 
posicion[6].innerHTML= `<h4> Posición: ${pilotos [6].posicion} </h4>` 
posicion[7].innerHTML= `<h4> Posición: ${pilotos [7].posicion} </h4>` 
posicion[8].innerHTML= `<h4> Posición: ${pilotos [8].posicion} </h4>` 
posicion[9].innerHTML= `<h4> Posición: ${pilotos [9].posicion} </h4>` 
posicion[10].innerHTML= `<h4> Posición: ${pilotos [10].posicion} </h4>` 
posicion[11].innerHTML= `<h4> Posición: ${pilotos [11].posicion} </h4>` 
posicion[12].innerHTML= `<h4> Posición: ${pilotos [12].posicion} </h4>` 
posicion[13].innerHTML= `<h4> Posición: ${pilotos [13].posicion} </h4>` 
posicion[14].innerHTML= `<h4> Posición: ${pilotos [14].posicion} </h4>` 
posicion[15].innerHTML= `<h4> Posición: ${pilotos [15].posicion} </h4>` 
posicion[16].innerHTML= `<h4> Posición: ${pilotos [16].posicion} </h4>` 
posicion[17].innerHTML= `<h4> Posición: ${pilotos [17].posicion} </h4>` 
posicion[18].innerHTML= `<h4> Posición: ${pilotos [18].posicion} </h4>` 
posicion[19].innerHTML= `<h4> Posición: ${pilotos [19].posicion} </h4>` 
posicion[20].innerHTML= `<h4> Posición: ${pilotos [20].posicion} </h4>` 


// Eventos

const mexicoEeuu = [
    {
        horario : document.querySelector ('.imgEvento1')
    },
    {
        horario : document.querySelector ('.imgEvento2')
    },
    {
        horario : document.querySelector ('.imgEvento3')
    },
    {
        horario : document.querySelector ('.imgEvento4')
    },
    {
        horario : document.querySelector ('.imgEvento5')
    },
    {
        horario : document.querySelector ('.imgEvento6')
    },
    {
        horario : document.querySelector ('.imgEvento7')
    },
    {
        horario : document.querySelector ('.imgEvento8')
    },
    {
        horario : document.querySelector ('.imgEvento9')
    },
    {
        horario : document.querySelector ('.imgEvento10')
    },
    {
        horario : document.querySelector ('.imgEvento11')
    },
    {
        horario : document.querySelector ('.imgEvento12')
    },
    {
        horario : document.querySelector ('.imgEvento13')
    },
    {
        horario : document.querySelector ('.imgEvento14')
    },
    {
        horario : document.querySelector ('.imgEvento15')
    },
    {
        horario : document.querySelector ('.imgEvento16')
    },
    {
        horario : document.querySelector ('.imgEvento17')
    },
    {
        horario : document.querySelector ('.imgEvento18')
    },
    {
        horario : document.querySelector ('.imgEvento19')
    },
    {
        horario : document.querySelector ('.imgEvento20')
    },
    {
        horario : document.querySelector ('.imgEvento21')
    },
    {
        horario : document.querySelector ('.imgEvento22')
    },

];


for (const h of mexicoEeuu) {
    let horario = h.horario
    horario.onclick = () => {
    alert ("Horario Mexico: " + parseInt(fecha1.getHours ()  - 1) +":00 hs" + "\n" + "Horario Estados Unidos: " + parseInt(fecha1.getHours ()  - 2) + ":00 hs")

};
}

