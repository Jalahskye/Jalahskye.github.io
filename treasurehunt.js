const treasure = (coins) => {
    if(coins === 1) {
        document.getElementById("1").innerHTML ="💣"
        alert("You Are A Winner!")
    }
    else if(coins === 2) {
        document.getElementById("2").innerHTML ="💣"
        alert("Try Again!")
    }
    else if(coins === 3) {
        document.getElementById("3").innerHTML= "🕷️"
    }
    else if(coins === 4) {
        document.getElementById("4").innerHTML= "💰"
        alert("You Are A Winner!")
    }
    else if(coins === 5) {
        document.getElementById("5").innerHTML= "🕸️"
        alert("Try Again!")
    }    
    else if(coins === 6) {
        document.getElementById("6").innerHTML= "🧟"
        alert("Try Again!")
    }
    } 
   