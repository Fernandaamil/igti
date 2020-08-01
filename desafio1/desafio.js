'use strict';
const fs = require('fs');

function funcionarios(fs) {
    var jsonData = fs.readFileSync('funcionarios.json');
    var funcionarios = JSON.parse(jsonData);
    return funcionarios;
}

function funcionarioComMaiorSalario(arrayFuncionarios) {
    var salario = 0;
    var funcionario;

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].salario > salario) {
            salario = arrayFuncionarios[i].salario;
            funcionario = arrayFuncionarios[i];
        }
    }

    return funcionario;
}

function funcionarioComMenorSalario(arrayFuncionarios) {
    var salario = (funcionarioComMaiorSalario(arrayFuncionarios)).salario;
    var funcionario;

    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].salario < salario) {
            salario = arrayFuncionarios[i].salario;
            funcionario = arrayFuncionarios[i];
        }   
    }

    return funcionario;
}

function nomeFuncionarioMaiorSalario(arrayFuncionarios) {
    var funcionario = funcionarioComMaiorSalario(arrayFuncionarios);
    return funcionario.nome;
}

function nomeFuncionarioMenorSalario(arrayFuncionarios) {
    var funcionario = funcionarioComMenorSalario(arrayFuncionarios);
    return funcionario.nome;
}


function mediaSalarialDaEmpresa(arrayFuncionarios) {
    var media;
    var totalSalarios = 0;
    var totalDeFuncionarios = arrayFuncionarios.length;

    for(var i = 0; i < totalDeFuncionarios; i++) {
        totalSalarios = totalSalarios + arrayFuncionarios[i].salario;
    }
    media = totalSalarios / totalDeFuncionarios;
    return media;

}

function buscaFuncionarioSetor(arrayFuncionarios, setor) {
    var arrayFuncionarioSetor = [];
    
    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arrayFuncionarios[i].setor == setor) {
            arrayFuncionarioSetor.push(arrayFuncionarios[i]);
        }
    }

    return arrayFuncionarioSetor;
}

function buscaSetores(arrayFuncionarios) {
    var arraySetor = [];
    for(var i = 0; i < arrayFuncionarios.length; i++) {
        if(arraySetor.indexOf(arrayFuncionarios[i].setor) == -1) {
            arraySetor.push(arrayFuncionarios[i].setor);
        }
    }

    return arraySetor;
}

function maiorSalarioPorSetor(arrayFuncionarios) {
    var setores = buscaSetores(arrayFuncionarios);
    var arrayFuncionariosSetor = [];
    var funcionario;
    
    for(var i = 0; i < setores.length; i++) {
        arrayFuncionariosSetor = buscaFuncionarioSetor(arrayFuncionarios, setores[i]);
        funcionario = funcionarioComMaiorSalario(arrayFuncionariosSetor);
        console.log("Funcionario de maior salário para o setor " + setores[i] + " é " + JSON.stringify(funcionario));
    }
}

function menorSalarioPorSetor(arrayFuncionarios) {
    var setores = buscaSetores(arrayFuncionarios);
    var arrayFuncionarioSetor = [];
    var funcionario;

    for(var i = 0; i < setores.length; i++){
        arrayFuncionarioSetor = buscaFuncionarioSetor(arrayFuncionarios, setores[i]);
        funcionario = funcionarioComMenorSalario(arrayFuncionarioSetor);
        console.log("funcionario de menor salário para setor " + setores[i] + " é " + JSON.stringify(funcionario));
    }
}

function mediaSalarioPorSetor(arrayFuncionarios){
    var setores = buscaSetores(arrayFuncionarios);
    var arrayFuncionarioSetor = [];
    var mediaPorSetor;

        for(var i = 0; i < setores.length; i++){
            arrayFuncionarioSetor = buscaFuncionarioSetor(arrayFuncionarios, setores[i]);
            mediaPorSetor = mediaSalarialDaEmpresa(arrayFuncionarioSetor);
            console.log("media de salario do setor " + setores[i] + " é " + mediaPorSetor);

        }
}


var funcionarios = funcionarios(fs);
console.log("O nome do funcionario de maior salario é: " + nomeFuncionarioMaiorSalario(funcionarios.funcionarios));
console.log("o nome do funcionario de menor salario é: " + nomeFuncionarioMenorSalario(funcionarios.funcionarios));
console.log("media de salario da empresa é:" + mediaSalarialDaEmpresa(funcionarios.funcionarios));
maiorSalarioPorSetor(funcionarios.funcionarios);
menorSalarioPorSetor(funcionarios.funcionarios);
mediaSalarioPorSetor(funcionarios.funcionarios);