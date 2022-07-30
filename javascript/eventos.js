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
}

// Registro
alert("Registrese para estar al tanto de los ultimos datos de F1.");
let nombre = prompt("Ingrese su nombre");
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
let nacionalidad = prompt("Ingrese su nacionalidad");

alert("Felicitaciones " + nombre + " te has registrado con exito");

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

pilotos.pop ()

// inicioDeSesion();


console.log ("A continuación les mostramos la tabla de posiciones actual: ")
for(const piloto of pilotos){
    console.log(piloto.piloto);
    console.log(piloto.posicion);
}

console.log ("El campeonato tiene un total de " + pilotos.length + " pilotos")

console.log ("Mientras tanto en la tabla de posiciones constructora (por equipo) podemos encontrar el siguiente orden:")
for(const equipo of equipos){
    console.log(equipo.equipo);
    console.log(equipo.posicion);
}

console.log ("El campeonato tiene un total de " + equipos.length + " equipos")

