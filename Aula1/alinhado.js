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

cliente.endereço.push( 
    
    {
        rua:"peros pero",
        numero:666,
        complemento:"reino angelos",
        apartamento:false


}

)
for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo != `object` && tipo != ` function`)
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}