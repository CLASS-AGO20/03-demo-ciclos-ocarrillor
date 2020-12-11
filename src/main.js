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

    contarImparesFor(inicio, fin){
        let cont = 0;
        for(let i = inicio; i <= fin; i++){
            if(i % 2 != 0){
                cont++;
            }
        }
        return cont;
    }
}

let app = new App();

//Demostracion de la funcion sumarParesFor.
console.log(app.sumarParesFor());

//Demostracion de la funcion sumarParesFor.
console.log(app.contarImparesFor(2,15));