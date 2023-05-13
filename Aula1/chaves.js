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

const chavesObject = Object.keys(cliente);

console.log(chavesObject)

if(chavesObject.includes("endereços")){
    console.error("é nessecario ter o endereço cadastrado")
}