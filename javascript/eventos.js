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
fecha: new Date (2022, 2, 20) 
},
{
fecha: new Date (2022, 2, 27)
},
{ 
fecha: new Date (2022, 3, 10)
}, 
{fecha: new Date (2022, 3, 24)
},
{fecha: new Date (2022, 4, 8)
}, 
{fecha: new Date (2022, 4, 22)
}, 
{fecha: new Date (2022, 4, 29)
}, 
{fecha: new Date (2022, 5, 12)
}, 
{fecha: new Date (2022, 5, 19)
}, 
{fecha: new Date (2022,6, 3)
}, 
{
fecha: new Date (2022,6, 10)
}, 
{
fecha: new Date (2022, 6, 24)
}, 
{
fecha: new Date (2022, 6, 31)
}, 
{
fecha: new Date (2022, 7, 28)
}, 
{
fecha: new Date (2022, 8, 4)
}, 
{
 fecha: new Date (2022, 8, 11)
}, 
{
fecha: new Date (2022, 9, 2)
}, 
{
fecha: new Date (2022, 9, 9)
}, 
{
fecha: new Date (2022, 9, 23)
}, 
{
fecha: new Date (2022, 9, 30)
}, 
{
fecha: new Date (2022, 10, 13)
}, 
{
fecha: new Date (2022, 10, 20)
}
];

let calendario = [];


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
console.log (calendario)


// Interactuando con html (Agregando informacion a los eventos queryselectorAll)
let contEventos = document.querySelectorAll ('.evento')
contEventos[0].innerHTML = `<h4> Circuito: ${calendario[0].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[0].fecha.fecha} </h4>`; 

contEventos[1].innerHTML = `<h4> Circuito: ${calendario[1].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[1].fecha.fecha} </h4>`; 

contEventos[2].innerHTML = `<h4> Circuito: ${calendario[2].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[2].fecha.fecha} </h4>`; 

contEventos[3].innerHTML = `<h4> Circuito: ${calendario[3].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[3].fecha.fecha} </h4>`; 

contEventos[4].innerHTML = `<h4> Circuito: ${calendario[4].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[4].fecha.fecha} </h4>`; 

contEventos[5].innerHTML = `<h4> Circuito: ${calendario[5].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[5].fecha.fecha} </h4>`; 

contEventos[6].innerHTML = `<h4> Circuito: ${calendario[6].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[6].fecha.fecha} </h4>`; 

contEventos[7].innerHTML = `<h4> Circuito: ${calendario[7].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[7].fecha.fecha} </h4>`; 

contEventos[8].innerHTML = `<h4> Circuito: ${calendario[8].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[8].fecha.fecha} </h4>`; 

contEventos[9].innerHTML = `<h4> Circuito: ${calendario[9].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[9].fecha.fecha} </h4>`; 

contEventos[10].innerHTML = `<h4> Circuito: ${calendario[10].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[10].fecha.fecha} </h4>`; 

contEventos[11].innerHTML = `<h4> Circuito: ${calendario[11].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[11].fecha.fecha} </h4>`; 

contEventos[12].innerHTML = `<h4> Circuito: ${calendario[12].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[12].fecha.fecha} </h4>`; 

contEventos[13].innerHTML = `<h4> Circuito: ${calendario[13].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[13].fecha.fecha} </h4>`; 

contEventos[14].innerHTML = `<h4> Circuito: ${calendario[14].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[14].fecha.fecha} </h4>`; 

contEventos[15].innerHTML = `<h4> Circuito: ${calendario[15].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[15].fecha.fecha} </h4>`; 

contEventos[16].innerHTML = `<h4> Circuito: ${calendario[16].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[16].fecha.fecha} </h4>`; 

contEventos[17].innerHTML = `<h4> Circuito: ${calendario[17].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[17].fecha.fecha} </h4>`; 

contEventos[18].innerHTML = `<h4> Circuito: ${calendario[18].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[18].fecha.fecha} </h4>`; 

contEventos[19].innerHTML = `<h4> Circuito: ${calendario[19].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[19].fecha.fecha} </h4>`; 

contEventos[20].innerHTML = `<h4> Circuito: ${calendario[20].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[20].fecha.fecha} </h4>`; 

contEventos[21].innerHTML = `<h4> Circuito: ${calendario[21].circuito.circuito} </h4>` + `<h4> Dia y Horario: ${calendario[21].fecha.fecha} </h4>`; 




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





