let mes= (parseInt(prompt("Escribe el número del mes:")));

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días");
        break;
    case 2:
        console.log("Este mes tiene 28 días");
        break;
    case 4:
    case 6:
    case 9:
    case 12:
        console.log("Este mes tiene 30 días");
        break;
    default:
        console.log("No es un mes del año");
        break;
}
