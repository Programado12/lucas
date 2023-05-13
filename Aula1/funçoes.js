const cliente={
    nome:"Lucas",
    idade:43,
    gmail:"roludo@gmail.com",
    celular:["(44)999999999","(99)444444444444"],
    saldo:200,
    efetuaPagamento:function(valor){
        if(valor < this.saldo){
            this.saldo -= valor
            console.log(`pagamento efetuado e o saldo atual é de ${this.saldo}`)
        }else{console.log("valor invalido")}
    }
}

cliente.efetuaPagamento(100);
