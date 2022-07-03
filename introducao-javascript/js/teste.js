ab= document.getElementById("a");
console.log(ab.textContent);
console.log(title);
console.log(title.textContent);
console.log("Alternative");


imc = peso_value/(altura_value*altura_value);
imc_tabela = pacient.querySelector(".info-imc");
imc_tabela.textContent = imc; /*Outra forma de resolver*/


teste = document.querySelector("td"); 
console.log(teste.classList); //Acesso a propriedade class list para manipular as classes de um elemento



//Manipulando o formulário
function addInformation() { 
    
    alert("bacalhau");
         
 }



title.addEventListener("click", addInformation); //também podemos chamar uma função anonima, criando uma função, retirando a função AddInformation e abrindo um function

