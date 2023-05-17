const Livro=require('./ListaLivros')

function menorValor(arrProdutos,posiçãoInicial){



let maisBarato=posiçãoInicial;
for(let atual=posiçãoInicial;atual<arrProdutos.length;atual++){
    if(arrProdutos[atual].preço<  arrProdutos[maisBarato].preço){
        maisBarato=atual;
    }
}

return maisBarato
}

module.export=menorValor;