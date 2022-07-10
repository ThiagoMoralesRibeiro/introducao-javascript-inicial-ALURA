pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

table = document.getElementById("tabela-pacientes");
//console.log(table);
table.addEventListener("dblclick", function (event) { 
    targetPacient = event.target;
    parentTarget = targetPacient.parentNode;
    parentTarget.classList.add("fadeOut")
    setTimeout(function () { 
        parentTarget.remove(); //o timeout me permite visualizar o efeito de fadeout e depois apagar o elemento
    }, 500)
    

    
})

//exemplo com forEach
/*pacientes.forEach( function(paciente)  {
    paciente.addEventListener("dblclick", function (){ 
        console.log("clicked")
     });
    
});*/

//esses exemplos não funcionam, visto que o evento anteriormente não estava no meu elemento pai
/*for (let i = 0; i < pacientes.length; i++) {
    const pacienteTr = pacientes[i];
    pacienteTr.addEventListener("dblclick", function () { 
        this.remove(); //this está atrelado ao dono do evento
    });
    
}*/

