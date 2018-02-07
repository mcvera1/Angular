"use strict";
var variableCadena = "algo"; //any para que admita cualquier valor
console.log(variableCadena); // en la consola escribir tsc -init y despues tcs -w
var constante1 = "constante";
function metodoprueba() {
    var a = "soy global";
    if (true) {
        var a_1 = "soy la variable"; //let para variables locales
    }
    console.log(a);
}
metodoprueba();
function tipoParametro(parametro1, parametro2, parametro3) {
    if (parametro2 === void 0) { parametro2 = "primer parametro"; }
    console.log(parametro1 + " " + parametro2 + " " + parametro3);
}
tipoParametro(1);
var atributoFuncion = function (a, b) { return a + b; }; //funcion flecha
var atributoFuncion2 = function (a, b) {
    var resultado = a + b;
    resultado * b;
    return resultado;
};
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    return Persona;
}());
function crearPersona() {
    var persona = new Persona("alejandro", "vera", "3152826490", 27);
    console.log(persona.getNombre() + "-" + persona.getApellido());
}
crearPersona();
function crearXmen() {
    var men = { nombre: "vera", superPoder: "el glorioso" }; //misma estructura de la interface
    imprimirXmen(men);
}
function imprimirXmen(xmen) {
    console.log(xmen.nombre + "-" + xmen.superPoder);
}
crearXmen();
