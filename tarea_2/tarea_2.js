const nombre = prompt('Nombre: ');
let edad = parseInt(prompt('Edad: '));
const contrasenia = prompt('Contraseña: ');
const length_contrasenia = contrasenia.length;

function validacion_usuario(){
if (nombre === ''){
    return console.error('Debe ingresar un nombre');
} else if (edad < 18){
    return console.error('Acceso no autorizado para menores de 18 años');
} else if (length_contrasenia <= 6 || length_contrasenia > 12){
    return console.log('La contraseña debe tener al menos 6 digitos como minimo y como maximo 12 digitos');
} else{
    console.log('¡Bienvenido '+nombre+'! tu edad es de '+edad+' años');
    edad = edad + 10;
    console.log(`Tu nombre es ${nombre} y tu edad en 10 años sera de ${edad}`);
}
}

validacion_usuario()