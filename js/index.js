

// função para girar logo
let cont = 0;
const logo = document.querySelector('#logo');

function giroLogo(){
    cont++;
    if(cont === 1){
        logo.classList.add('girarLogo');
    }else{
        logo.classList.remove('girarLogo');
        cont = 0;
    }
          
}

// funções para formularios

// formualario cpf
const areaCpf = document.querySelector('#area-cpf');
const labelCpf = areaCpf.querySelector('label');
const inputCpf = areaCpf.querySelector('input');



function formularioCpfAtivado(){
    labelCpf.classList.add('caixa-acionada-label');
    inputCpf.style.borderColor = 'var(--roxo)';
}

function formulariCpfDesativado(){
    if(!(inputCpf.value)){
        labelCpf.classList.remove('caixa-acionada-label');
        inputCpf.style.borderColor = '#ccc';
    }
}



function verificaCpf(){
    $(inputCpf).ready(function(){
		$("#cpf").mask("999.999.999-99");
	});
    let validaCpf = new ValidaCpf(inputCpf.value);
    if(!validaCpf.valida() || !inputCpf.value){
        areaCpf.classList.add('erroFormularaios');
        ativaBtn();
    }else{
        areaCpf.classList.remove('erroFormularaios');
        ativaBtn();
    }
}



// formulario senha
const areaSenha = document.querySelector('#area-senha');
const labelSenha = areaSenha.querySelector('label');
const inputSenha = areaSenha.querySelector('input');

function formularioSenhaAtivado(){
    labelSenha.classList.add('caixa-acionada-label');
    inputSenha.style.borderColor = 'var(--roxo)';
}

function fomrularioSenhaDesativado(){
    if(!(inputSenha.value)){
        labelSenha.classList.remove('caixa-acionada-label');
        inputSenha.style.borderColor = '#ccc';
    }
}

function verificaSenha(){
    const validaSenha = new ValidaSenha(inputSenha.value);

    if(!validaSenha.valida()){
        areaSenha.classList.add('erroFormularaios');
        ativaBtn();
    }else{
        areaSenha.classList.remove('erroFormularaios');
        ativaBtn();
    }
     
}

// botão

const btn = document.querySelector('#btn');

function ativaBtn(){
    let validaCpf = new ValidaCpf(inputCpf.value)
    let validaSenha = new ValidaSenha(inputSenha.value);

    if(validaCpf.valida() && validaSenha.valida()){
        btn.classList.add('btn-ativado');
    }else{
        btn.classList.remove('btn-ativado');
    }
}






