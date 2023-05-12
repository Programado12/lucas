const cliente={
    nome:"lucas",
    idade:24,
    gmail:"arromba@gmail.com",
    componente:"rua senador pika longa",
    telefone:["(88)99999999","(11)22222222"]
}

cliente.endereço=[
    {
        local:"AL",
        valor:2500,
        apartamento:true

    }
]

function ligaParaCliente(comercial,residencial){
    console.log(`ligação comercial ${comercial}`)
    console.log(`ligação residencial ${residencial}`)
}
ligaParaCliente(...cliente.telefone)

const encomenda={
    destinatario: cliente.nome,
    ...cliente.endereço[0]
}
console.log(encomenda)