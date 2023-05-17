const {edFolha ,edGalho}=require('./arrays');

function JuntarListas(lista1 , lista2){
    let finalLista=[];
    let inicioLista1=0;
    let inicioLista2=0;
    let atual=0;

    while(inicioLista1 < lista1.length && inicioLista2 < lista2.length){
        let produtoLista1 = lista1[inicioLista1];
        let produtoLista2 = lista2[inicioLista2];

        if(produtoLista1.preço < produtoLista2.preço){
            finalLista[atual] = produtoLista1;
            inicioLista1++

        }else{
            finalLista[atual] = produtoLista2;
            inicioLista2++
        }
        atual++
    }
return finalLista;
}
console.log(JuntarListas(edFolha , edGalho));