const Cliente={
    nome : "Lucas",
    cpf :"122-344-566-78",
    idade:34,
    gmail : "penisDeTenis@gmail.com"
};

console.log(`o nome do nosso cliente é ${Cliente["nome"]} ele possui ${Cliente["idade"]} anos e os  3 primeiros digitos do seu cpf é ${Cliente.cpf.substring(0,3)}`)

const chaves=["nome","cpf","idade","gmail"];

chaves.forEach((chave)=>{
    console.log(`a chave ${chave} tem valor ${Cliente[chave]}`)

})