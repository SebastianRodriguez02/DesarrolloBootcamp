function Validarnumero () {
    let numero = document.getElementById("numeroagregado").value;
    let total = document.getElementById("resultado")
    total.innerHTML = ""    
    
    while (numero !=1){
        if(numero % 2 == 0) {
            numero = numero / 2
            total.innerHTML += numero +  ' '  
        } 
        else if(numero % 2 == 1){
                numero = ( numero *3) + 1
                total.innerHTML += numero +  ' ' 
          


            }
        }
    }