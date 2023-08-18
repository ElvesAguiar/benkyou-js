function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('digite seu nome?')

    area.innerHTML = texto;
}

let array = [1,2,3,4,5];

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("\n");
array.forEach((e)=>{console.log(e)})
console.log("\n");

for(let element of array){
    console.log(element)
}

function acao(){
     document.write("Executando...<br/>");
}
var timer =setInterval(acao,2000);

