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

    sumarParesWhile(){
        let cont = 1, suma = 0;
        while(cont <= 20){
            if(cont % 2 == 0){
                suma = suma + cont;
            }
            cont++;
        }
        return suma;
    }

    contarImparesWhile(inicio, fin){
        let cont = 0, i = inicio;
        while(i <= fin){
            if(i % 2 != 0){
                cont++;
            }
            i++;
        }
        return cont;
    }

    sumarParesDo(){
        let cont = 1, suma = 0;
        do{
            if(cont % 2 == 0){
                suma = suma + cont;
            }
            cont++;
        }while(cont <= 20);
        return suma;
    }
}

let app = new App();

//Demostracion de la funcion sumarParesFor.
console.log(app.sumarParesFor());

//Demostracion de la funcion contarImparesFor.
console.log(app.contarImparesFor(2,15));

//Demostracion de la funcion sumarParesWhile.
console.log(app.sumarParesWhile());

//Demostracion de la funcion contarImparesWhile.
console.log(app.contarImparesWhile(2,15));

//Demostracion de la funcion sumarParesDo.
console.log(app.sumarParesDo());