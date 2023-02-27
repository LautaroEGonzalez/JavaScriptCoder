let contado = parseFloat(prompt("Ingrese el precio de contado: "));
let precioCuotas = parseFloat(prompt("Ingrese el precio total en cuotas: "));
let cuotas = parseInt(prompt("ingrese la cantidad de cuotas a pagar: "));
let inflacion = 6;
let porcentaje = 0;
    if((contado < precioCuotas) && (contado != 0) && (precioCuotas != 0) && (cuotas != 0)){
        console.log("check 1");
        porcentaje=((((precioCuotas/cuotas) - (contado/cuotas)) / contado) * 100);
        console.log(porcentaje);
        if(porcentaje < inflacion){
            alert("Te conviene las cuotas mi rey");
            console.log("check 2");
        }
        else{
            alert("No te conviene mi rey");
            console.log("check 3");
        } 
    }
    else{
        alert("No te conviene mi rey");
    }


