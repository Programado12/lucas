const cliente={
    nome:"Lucas",
    idade:43,
    gmail:"roludo@gmail.com",
    celular:["(44)999999999","(99)444444444444"]
}

cliente.endereço=[
    
    {

    rua:"senador arnon de melo",
    numero:189,
    complemento:"perto da loja sex.com",
    apartamento:true
}


]
function ligaParaCliente(comercial,residencial){
    console.log(`ligando para ${comercial}`);
    console.log(`ligando para ${residencial}`)
}

ligaParaCliente(...cliente.celular)

const encomenda = {
    destinatario :cliente.nome,
    ...cliente.endereço[0]
}
console.log(encomenda)