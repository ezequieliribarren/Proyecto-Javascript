alert("Registrese para obtener información sobre las competiciones deporitvas");

let nombre = prompt("Ingrese su nombre");
let usuario = prompt("Ingrese su usuario");
let contrasenia = prompt("Ingrese su contraseña");
let eventoFavorito = prompt("Ingrese su evento favorito (Automovilismo = aut - Futbol = fut - Todas = tod )");

eventoFavorito.toLowerCase
let datos = ":";
let competencias = "";
if (eventoFavorito == "aut") {
    while (competencias != "s") {
        datos = datos + " " + competencias + " -"
        competencias = prompt("Usted a seleccionado Automovilismo, por favor enumere sus competencias favoritas para realizar el seguimiento. Ejemplo: Turismo carretera, Formula 1, Nascar, Rally. Presione s para finalizar.");
       

    }

    alert("Sus competencias favoritas son " + datos);

}

else if (eventoFavorito == "fut") {
    while (competencias != "s") {
        datos = datos + " " + competencias + " -"
        competencias = prompt("Usted a seleccionado Futbol, por favor enumere sus competencias favoritas para realizar el seguimiento. Ejemplo: Champions League, Copa Libertadores, Torneo Local. Presione s para finalizar.");
       

    }

    alert("Sus competencias favoritas son " + datos);
}

else if (eventoFavorito == "tod")  {
alert ("Usted ha seleccionado estar al tanto de todos los eventos, puede accerder a la información de todas las competiciones.")
}

else {
    alert ("Usted ha seleccionado un valor incorrecto. En su perfil vuelva a seleccionar sus preferencias de competencias.")
}


alert("Felicitaciones " + nombre + " te has registrado con exito");

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

if (eventoFavorito == "fut") {
    alert ("Segun su elección le brindamos el siguiente reporte semanal: \n Partidos de esta semana \n Champions League: \n Real Madrid vs Liverpool \n Jueves 18:00 hs (Argentina) \n Copa Libertadores: \n Velez Sarsfield vs Estudiantes de la Plata \n Martes 19:00 hs (Argentina) "  )
}

else if (eventoFavorito == "aut") {
    alert ("Segun su elección le brindamos el siguiente reporte semanal: \n 31 de julio \n Turismo Nacional - Termas de Río Hondo: 18:00 hs (Argentina) \n Top Race - Rafaela: 15:00 hs (Argentina) \n Fórmula 1 - Hungría: 11:00 hs (Argentina) \n Formula E - Londres: 13:00 hs (Argentina) \n NASCAR - Indianapolis: 06:00 hs (Argentina)")
}

else if (eventoFavorito == "tod") {
    alert("Futbol \n\n Partidos de esta semana \n Champions League: \n Real Madrid vs Liverpool \n Jueves 18:00 hs (Argentina) \n Copa Libertadores: \n Velez Sarsfield vs Estudiantes de la Plata \n Martes 19:00 hs (Argentina) \n\n Automovilismo \n\n 31 de julio \n Turismo Nacional - Termas de Río Hondo: 18:00 hs (Argentina) \n Top Race - Rafaela: 15:00 hs (Argentina) \n Fórmula 1 - Hungría: 11:00 hs (Argentina) \n Formula E - Londres: 13:00 hs (Argentina) \n NASCAR - Indianapolis: 06:00 hs (Argentina)")
}

else {
    alert ("Usted no ha seleccionado sus preferencias, editelas desde su perfil en la barra superior izquierda.")
}


