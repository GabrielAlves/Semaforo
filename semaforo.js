i = 0;
tempoDeTroca = 1000;

setInterval(alterarCor, tempoDeTroca);

function alterarCor(){

    if(i == 0){
        document.getElementById("circulo-superior").style.backgroundColor = "#CD0000";
        document.getElementById("circulo-medio").style.backgroundColor = "#FFFF00";
        
    }

    else if(i == 1){
        document.getElementById("circulo-medio").style.backgroundColor = "#CDCD00";
        document.getElementById("circulo-inferior").style.backgroundColor = "#00FF00";
    }

    else{
        document.getElementById("circulo-superior").style.backgroundColor = "#FF0000";
        document.getElementById("circulo-inferior").style.backgroundColor = "#00CD00";
    }

    i++;
    
    if(i == 3){
        i = 0;
    } 
    
}