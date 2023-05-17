const Livro=require('./ListaLivros');
const menorValor=require('./menorValor');

for(let atual =0; atual<Livro.length - 1;atual++ ){
    let menor = menorValor(Livro,atual);

    let livroAtual=Livro[atual];
    console.log(`livro atual ${Livro[atual]}`)

    let menorPreço= Livro[menor];
    console.log(`livro menor preço ${Livro[menor]}`)

    Livro[atual]= menorPreço
    Livro[menor]=livroAtual

}
console.log(Livro)