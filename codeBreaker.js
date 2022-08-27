let secret;

function start(){
    secret = "";
    var lista = [0,1,2,3,4,5,6,7,8,9];
    lista = lista.sort(function() {return Math.random() - 0.5});
    for(let posicion = 0; posicion < 3; posicion++){
        secret = lista.slice(6).join("");
    }
    return secret;
}


function setSecret(value){
    secret = value;
}


//terminar la parte de conicida uno en posicion diferente
function guess(value){
    let retorno = ""
    let valueArray=[]
    valueArray = value.split("");
    if(value==secret){
        return "XXXX";
    }
    for(posicion = 0; posicion < secret.length; posicion++){
        let index = secret.indexOf(value[posicion])
        if(index != -1){
            if(index == posicion){
                retorno = "X"+retorno
            }else{
                retorno += "_"
            }
        }
    }
    return retorno

}



module.exports.guess = guess;
module.exports.setSecret = setSecret;
module.exports.start = start;