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
const listaDeApartamnetos=cliente.endereço.filter((endereço)=> endereço.apartamento===true);


console.log(listaDeApartamnetos)