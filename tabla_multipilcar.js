
let user=0;

while (user<2 || user >10 ) {
    user = prompt("Introducir un número entre 2 y 10 para mostrar su tabla de multiplicar");
}
for (let number = 1; number <=10; number++) {
    
    console.log(user + " * " + number + " = " + user*number); 
}
