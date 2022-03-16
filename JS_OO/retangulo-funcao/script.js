function Retangulo(altura, largura){
    //atributos - propriedades
    this.altura = altura;
    this.largura = largura;

    //métodos 
    this.area = function(){
        return this.altura * this.largura;
    }

}

//instanciando o objeto
var r1 = new Retangulo(2, 2)

console.log(r1)
console.log(r1.area())

//Verificar se é um objeto da classe
console.log(r1 instanceof Retangulo)