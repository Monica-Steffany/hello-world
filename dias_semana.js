let user= (prompt("Escribe un día de la semana:"));

switch (user) {
    case "lunes":
        console.log("Mañana será martes");
        break;
    case "martes":
        console.log("Mañanra será miércoles");
        break;
    case "miércoles":
        console.log("Mañana será jueves");
        break;
    case "jueves":
        console.log("Mañana será viernes");
        break;
    case "viernes":
        console.log("Mañanra será sábado");
        break;
    case "sabado":
        console.log("Mañana será domingo");
        break;
    case "domingo":
        console.log("Mañana será lunes");
        break;
    default:
        console.log("No es un día de la semana");
        break;
}
