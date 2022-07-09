
// Função para adicionar um novo paciente
function addNewPacient(event) { 
    event.preventDefault();


    //A variável form se refere a todo o formulário q está sendo puxado

    form = document.querySelector("#form-adiciona");
    //console.log(form);
    
    //adiciono os valores presentes no formulário a suas respectivas variáveis. Criei um objeto e vou armazenar os dados da função dentro dele
    
    myPacient = addDataForm(form);
    //console.log(myPacient.nome) Pelo fato do myPaciente estar relacionado com meu objeto paciente, eu consigo declarar os atributos do objeto na própria variável;

    pacienteTr= createPacienteTR(myPacient);
    //console.log(pacienteTr);

    msgErro = pacientValidate(myPacient);
    console.log(msgErro);

    if(msgErro.length > 0){
        showErrorMessage(msgErro);
        return;
    }
    

    
    pacientTable = document.querySelector("#tabela-pacientes");
    pacientTable.appendChild(pacienteTr); 

    messageErrors = document.querySelector("#msg-erro")
    messageErrors.innerHTML = ""; //isso permite que por mais que o meu usuário tenha colocado os valores errados e tenha sido feita a verificação, assim que ele insere os dados corretos, a minha ul é limpa. Isso dá a entender que não há mais erro

    

    form.reset(); //após realizar a função, reseta os campos

    
}

buttonAdd = document.getElementById("adicionar-paciente");
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

        errors = [];

        if(!ValidaPeso(paciente.peso)){
            errors.push("Peso inválido"); 
        }
        if(!ValidaAltura(paciente.altura)){
            errors.push("Altura Inválida");
        }
        if (paciente.nome.length == 0) {
            errors.push("Preencha o nome do paciente")
        }

        if (paciente.gordura.length == 0) {
            errors.push("Prencha o percentual de gordura")
        }
        /*if (!ValidaAltura(paciente.altura) && !ValidaPeso(paciente.peso)) {
            errors.push("Peso e Altura inválidos");
        }*/

        return errors;
    

}

function showErrorMessage(errors) { 
    ul = document.querySelector("#msg-erro");
    ul.innerHTML = ""; //impedir que seja adicionada toda vez a mesma mensagem a medida que o usuário executa a função
    for (let i = 0; i < errors.length; i++) {
        errorValue = errors[i];
        li = document.createElement("li");
        li.textContent = errorValue; 
        ul.appendChild(li);   
    }
    /*errors.forEach(function (errorValue) { 
        li = document.createElement("li");
        li.textContent = errorValue;
        ul.appendChild(li);   
    });*/
}
