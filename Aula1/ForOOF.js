const medias = [10 , 6.5 , 8 , 7.5];

let soma=0;

medias.forEach(function(nota){
    soma+=nota;
})

const media= soma/4;

console.log(`a soma das notas é de ${soma} e a media é de ${media}`)