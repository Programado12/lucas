const medias = [10 , 6.5 , 8 , 7.5];

let mediasNotas=0;

for(let c=0;c<medias.length;c++){
    mediasNotas+=medias[c];

}

const total=mediasNotas/4;
console.log(`a media das notas é de ${total}`);
