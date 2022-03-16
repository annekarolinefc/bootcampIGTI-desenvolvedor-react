//CRIANDO A CLASSE
class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    area(){
        return this.altura * this.largura;
    }
    imprimeNome(){
        console.log("Retangulo")
    }
}

var r1 = new Retangulo(3,4);
var r2 = new Retangulo(3,8);

//HERANÇA
class Quadrado extends Retangulo{
    constructor(dimensao){
        super(dimensao, dimensao);
    }

    //sobreescrevendo
    imprimeNome(){
        console.log("Quadrado")
    }
}

var q1 = new Quadrado(3);
var q2 = new Quadrado(8);