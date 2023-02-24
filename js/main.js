let contado = parseFloat(prompt("Ingrese el precio de contado: "));
let precioCuotas = parseFloat(prompt("Ingrese el precio total en cuotas: "));
let cuotas = parseInt(prompt("ingrese la cantidad de cuotas a pagar: "));
let inflacion = 6;
let porcentaje;
    if((contado < precioCuotas) && (contado != 0) && (precioCuotas != 0) && (cuotas != 0)){
        console.log("check 1");
        function recargo(){ 
            ((precioCuotas - contado) / contado) * 100  == porcentaje;   
        }
        recargo();
        console.log(porcentaje);
        if(porcentaje < inflacion){
            alert("Te conviene las cuotas mi rey")
        } 
    }
    else{
        alert("no te conviene mi rey");
    }


