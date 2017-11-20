var variableCadena:String="algo";//any para que admita cualquier valor
console.log(variableCadena); // en la consola escribir tsc -init y despues tcs -w
const constante1="constante";

function metodoprueba(){
    let a="soy global";
    if(true){
        let a = "soy la variable";//let para variables locales
    }
    console.log(a);
}

metodoprueba();

function tipoParametro(parametro1:Number,parametro2:String="primer parametro" ,parametro3?:String) {// parametro1 es obligatorio,parametros opcionales al final no pueden ir de primero
    console.log(parametro1+" "+parametro2+" "+parametro3);
}

tipoParametro(1);

let atributoFuncion=(a:number,b:number) => a+b;//funcion flecha

let atributoFuncion2=(a:number,b:number) => {
    let resultado = a+b;
    resultado*b;
    return resultado;
}

class Persona{
    private nombre:String;
    private apellido:String;
    private telefono:String;
    private edad:Number;

    constructor(nombre:String, apellido:String, telefono:String, edad:Number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.edad=edad;
    }

    getNombre():String{
        return this.nombre;
    }

    getApellido():String{
        return this.apellido;
    }

    getTelefono():String{
        return this.telefono;
    }

    getEdad():Number{
        return this.edad;
    }
}

function crearPersona(){
    let persona:Persona = new Persona("alejandro","vera","3152826490",27);
    console.log(persona.getNombre()+"-"+persona.getApellido());
}

crearPersona();

interface XmenI{
    nombre:String;
    superPoder:String;
}

function crearXmen(){
    let men ={nombre:"vera",superPoder:"el glorioso"};//misma estructura de la interface

    imprimirXmen(men);
}

function imprimirXmen(xmen:XmenI){
    console.log(xmen.nombre+"-"+xmen.superPoder);
}

crearXmen();