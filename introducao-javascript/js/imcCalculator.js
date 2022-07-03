

//Utilizando a propriedade queryselector para manipular as informações contidas em tags que possuem esse ID
title = document.querySelector("#a");
title.textContent = "Aparecida Nutrição";


//Seleciono todos os <tr> que possuem paciente como classe
paciente =document.querySelectorAll(".paciente");
pacientesCount = paciente.length;
console.log(pacientesCount);

for (i = 0; i < paciente.length; i++) {

    pacientes = paciente[i];

    console.log(pacientes);

    peso_tabela = pacientes.querySelector(".info-peso");// seleciono a classe presente no <td> que armazena o valor do peso
    peso_value = peso_tabela.textContent;//puxo o valor da variável

    altura_tabela=pacientes.querySelector(".info-altura");//seleciono a classe presente no <td> que armazena o valor da altura
    altura_value = altura_tabela.textContent;// puxo o valor da variável


    function imcCalc(peso, altura) { //função para calcular o imc

        calcular = peso / (altura * altura)
        
        return calcular;
    }

    /* Validação do peso e da altura */

    pesoValido = ValidaPeso(peso_value);
    if(!pesoValido){
        pacientes.querySelector(".info-imc").innerHTML = "Peso inválido";
        pacientes.classList.add("pacienteInvalido");//dessa forma eu consigo adicionar uma classe 
        //document.querySelector(".paciente").style.background = "red";
    }

    alturaValida = ValidaAltura(altura_value);
    if(!alturaValida){
        pacientes.querySelector(".info-imc").innerHTML = "Altura inválida";
        pacientes.classList.add("pacienteInvalido");//dessa forma eu consigo adicionar uma classe 
        //document.querySelector(".paciente").style.background = "red";
    
    }

    if(!alturaValida && !pesoValido){

        pacientes.querySelector(".info-imc").innerHTML = "Altura inválida ou Peso inválido";
        pacientes.classList.add("pacienteInvalido");//dessa forma eu consigo adicionar uma classe 
        //document.querySelector(".paciente").style.background = "red";

    }
}

function ValidaPeso(peso) { 
    if(peso >= 2 && peso <= 600){
        return true;
    }
    else{
        return false;
    }
}

function ValidaAltura(altura) { 
    if(altura < 3.00 && altura >= 0.4){
        return true;
    }
    else{
        return false;
    }
}



