//classe
// encapsulamento - atributos privados recebem _ para indicar que o atributo é privado. Pode-se colocar o # para dizer que ele é privado de fato, mas esse recurso geralmente não é usado devido a compatibilidade.

// o export serve para que essa classe seja importada por outror arquivos

export class Pessoa
{

   // atributos estáticos - são atributos da própria classe 
    static totalPessoas = 0;
    constructor(nome, idade, peso, altura){
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2);
        Pessoa.totalPessoas += 1;
    }
    calcularImc(){
        return (this._peso/(this._altura * this._altura)).toFixed(2);
    }
    classificaImc(){
        let valor = (this.imc);
        let classificacao = '';
        if(valor <= 18.5){
            classificacao = 'abaixo do peso';
        }else if(valor <= 24.9){
            classificacao = 'sobrepeso';
        }else if (valor >= 25){
            classificacao = 'obesidade';
        }
        return classificacao;
    }

    // get - para que os dados possam ser mostrados
    get nome(){
        return this._nome;
    }
    get imc(){
        return this._imc;
    }
    get peso(){
        return this._peso;
    }
    get idade(){
        return this._idade;
    }
    get altura(){
        return this._altura;
    }
    get totalPessoas(){
        return Pessoa.totalPessoas;
    }

    // set - setar, alterar os dados dos objetos

    set nome(valor){
        this._nome = valor;
    }
    set idade(valor){
        this._idade = valor;
    }
    set peso(valor){
        this._peso = valor;
    }
    set altura(valor){
        this._altura = valor;
    }

}