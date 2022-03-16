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
var r1 = new Retangulo(2, 2);
var r2 = new Retangulo(4, 4);

function RetanguloV2(altura, largura){
    //atributos - propriedades
    this.altura = altura;
    this.largura = largura;
}
RetanguloV2.prototype.area = function(){
    return this.altura * this.largura;
};

var r1 = new RetanguloV2(2, 2);
var r2 = new RetanguloV2(4, 4);