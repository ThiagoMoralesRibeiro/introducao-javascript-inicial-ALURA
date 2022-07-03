
// Função para adicionar um novo paciente
function addNewPacient(event) { 
    event.preventDefault();


    //A variável form se refere a todo o formulário q está sendo puxado

    form = document.querySelector("#form-adiciona");
    //console.log(form);
    
    //adiciono os valores presentes no formulário a suas respectivas variáveis. Criei um objeto e vou armazenar os dados da função dentro dele
    
    myPacient = addDataForm(form);
    pacientValidate(myPacient);

    pacienteTr= createPacienteTR(myPacient);
    console.log(pacienteTr);

    if(!pacientValidate(paciente)){
        console.log("bfrh")
        return;
    }

    
    pacientTable = document.querySelector("#tabela-pacientes");
    pacientTable.appendChild(pacienteTr);

    

    form.reset(); //após realizar a função, reseta os campos

    
}

buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", addNewPacient);

function addDataForm(form){
    //processo de criação de um objeto

    paciente = {
    
        nome: form.nome.value, //O "." permite acessar os inputs com seus respectivos nomes
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: imcCalc(form.peso.value, form.altura.value).toFixed(1)


    }

    return paciente
}

function createPacienteTR(paciente){

    //Crio uma tr para minha tabela e já vou adicionando seus td's

    pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    //Começo a criar os campos da minha tabela, ou seja, nome, peso, altura e gordura

    nomeTd = createPacienteTD(paciente.nome, "info-nome");
    pesoTd = createPacienteTD(paciente.peso, "info-peso");
    alturaTd = createPacienteTD(paciente.altura, "info-altura");
    gorduraTd = createPacienteTD(paciente.gordura, "info-gordura");
    imcTd = createPacienteTD(paciente.imc,"info-imc");

    
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    
    
    return pacienteTr
}

function createPacienteTD(data, classe) { 
    td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);

    return td;
 }

function pacientValidate(paciente) { 

    if(ValidaPeso(paciente.peso) && ValidaAltura(paciente.altura)){
        return true;
    }
    else{
        return false;
    
    }

}
