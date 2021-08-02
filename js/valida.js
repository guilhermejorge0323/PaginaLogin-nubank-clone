class ValidaCpf{
    constructor(cpf){
        this.cpfLimpo = cpf.replace(/\D+/g,'');
    }

    sequencia(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito){
        let total = 0;
        let rev = cpfSemDigito.length + 1;

        for(let n of cpfSemDigito){
            total += rev * Number(n);
            rev--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        !this.geraNovoCpf();
        return this.novoCpf === this.cpfLimpo;
    }
}


class ValidaSenha{
    constructor(senha){
        this.senha = senha;
    }

    valida(){
        if(this.senha.length <= 7 || !this.senha){
            return false;
        }else{
            return true;
        }
    }
}


