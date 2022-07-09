pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

//exemplo com forEach
/*pacientes.forEach( function(paciente)  {
    paciente.addEventListener("dblclick", function (){ 
        console.log("clicked")
     });
    
});*/


for (let i = 0; i < pacientes.length; i++) {
    const pacienteTr = pacientes[i];
    pacienteTr.addEventListener("dblclick", function () { 
        this.remove(); //this está atrelado ao dono do evento
    });
    
}

