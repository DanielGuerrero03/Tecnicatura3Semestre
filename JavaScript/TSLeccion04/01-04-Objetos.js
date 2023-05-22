let x = 10; // variable de tipo primitiva
console.log(x.lenght);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'ES', 
    get lang(){
        return this.idioma.toUpperCase(); // Convierte las minusculas a mayusculas
    },
    set lang(Lang){
        this.idioma = Lang.toLocaleUpperCase();
    },
    nombreCompleto: function(){ // esto es un metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+", Edad: "+this.edad; 
    }

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto')
let persona2 = new Object(); // Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5492618282821';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
// for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Guerrero'; // Cambiamos dinamicamente un valor del objeto
delete persona.apellida; // Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1 : la mas sensilla, concatener cada valor con cada propiedad
console.log('Distintas formas de imprimir un objeto: Forma 1');
console.log(persona.nombre+','+persona.apellido);

//Numero 2 : a travez del ciclo for in
console.log('Distintas formas de imprimir un objeto: Forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3 : La funcion Objet.values()
console.log('Distintas formas de imprimir un objeto: Forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Numero 4: Utilizaremos el metodo JSON.stringify
console.log('Distintas formas de imprimir un objeto: Forma 4');
let presonaString = JSON.stringify(persona);
console.log(presonaString);

console.log('Comensamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; // modificamos el nombre
padre.telefono = '5492604552233'; //Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la funcion
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); // la propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de vrear objetos
//Caso objeto 1
let miObjeto = new Object(); // Esta es una opcion formal
//Caso objeto 2
let miObjeto2 = {}; // Esta opcion es breve y recomendada

//Caso String 1
let miCadena1 = new String('Hola'); // Sintaxis formal
//Caso String 2
let miCadena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//Caso con numeros 1
let miNumero = new Number(1); // Es formal no recomendable
//Caso numeros 2
let miNumero2 = 1; // Sintaxis recomendada

//Caso boolean 1
let miBoolean1 = new Boolean(false); // formal
//Caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); // Formal
//Caso Arreglos 2
let miArreglo2 = []; // Sintaxis recomendada

//Caso funcion 1
let miFuncion1 = new function(){}; // Todo despues de new es considerado objeto
//Casi funcion 2
let miFuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2604553322';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '5492604553322'
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}
console.log(persona4.nombreCompleto2('Lic', '549889966'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '5492604887799'));

//Metodo Apply
let arreglo = ['Ing.', '5492604114477'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));