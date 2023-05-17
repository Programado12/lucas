const livros=require('./ListaLivros');

function insetionsarts(lista){
    for(let atual = 0;atual < lista.length;atual++){
       let analize = atual;

       while(analize > 0 && lista[analize].preço < lista[analize - 1].preço){
        let itemAnalize=lista[analize];
        let itemAnterior= lista[analize-1];

        lista[analize]= itemAnterior;
        lista[analize-1]=itemAnalize;

        analize--
        
       }
    }
    console.log(lista)
}
insetionsarts(livros)




// const livros=require('./ListaLivros');

// function insertionSart(lista){
//     for(let atual = 0;atual < lista.length;atual++){
//         let analize = atual;

//         while(analize > 0 && lista[analize].preço < lista[analize - 1].preço){
//             let itemAnalize=lista[analize];
//             let itemAnterior=lista[analize-1];

//             lista[analize]=itemAnterior;
//             lista[analize-1]=itemAnalize;

//             analize--

//         }

//     }

//     console.log(lista)

// }

// insertionSart(livros)

