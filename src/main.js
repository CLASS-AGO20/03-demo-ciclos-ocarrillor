export default class App {
    sumarParesFor(){
        let suma = 0;
        for(let i = 1; i <= 20; i++){
            if(i % 2 == 0){
                suma = suma + i;
            }
        }
        return suma;
    }
}

let app = new App();

//Demostracion de la funcion sumarParesFor.
console.log(app.sumarParesFor());