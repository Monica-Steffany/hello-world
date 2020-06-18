let meses= (parseInt(prompt("Escribe el número del mes:")));


if(meses >=1 && meses <=12) {
    let numeroDeDias =31;
switch (meses) {
    case 2:
    numeroDeDias = 28;    
        break;
    case 4:
    case 6:
    case 9:
    case 12:
    numeroDeDias = 30;
        break;
    }
    console.log ("Este mes tiene " + numeroDeDias + " días");
} else {
    console.log("No es un valor válido");
}
