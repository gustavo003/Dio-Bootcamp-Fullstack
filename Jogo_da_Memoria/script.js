let orders = [];

let clickedOrder = [];

let score = 0;

const blue = document.querySelector(".blue")

const red = document.querySelector(".red")


const yellow = document.querySelector(".yellow")


const green = document.querySelector(".green")

const iniciar = document.querySelector("#iniciar")


const parar = document.querySelector("#parar")

let shuffleOrder = ()=>{
    let colorOrder = Math.floor(Math.random() *4)
    orders[orders.length] = colorOrder;
    clickedOrder = []


    for (let i in orders){
        let elementColor = createColorElement(orders[i])
        lightColor(elementColor, Number(i) + 1)
    }

}

let lightColor = (element, time)=>{

    time = time* 500
    
    setTimeout(()=>{
        element.classList.add("selected")
    }, time-250)


setTimeout(()=>{
    element.classList.remove("selected")

}, time+ 100)


}

let checkOrder = ()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] !=orders[i]){
            gameOver()
            return;
        }
    }
    if(clickedOrder.length == orders.length){
        alert(`Pontuação: ${score}\n Voce acertou, iniciando proximo nivel!`)
    nextlevel()
    }

}

let click = (color)=>{


    if(iniciar.innerHTML.trim()=="Iniciar"){
        return;
    }

    clickedOrder[clickedOrder.length] = color;
    let element = createColorElement(color)

    element.classList.add("selected");

    setTimeout(() => {
        element.classList.remove("selected")
        checkOrder()

    }, 250);

}

let createColorElement = (color)=>{

    if(color==0){
        return blue;
    }
    else if(color==1){
        return red;
    }
    else if(color==2){
        return yellow;
    }
    else if(color==3){
        return green;
    }

}


let nextlevel = ()=>{
    score++;
    shuffleOrder();

}

let gameOver = ()=>{
    alert(`Pontuação: ${score} Você perdeu o jogo! Clique em ok para iniciar um novo jogo`)
   
reset()
}


let reset = ()=>{
    iniciar.innerHTML = "Iniciar"
    parar.style.display="none"
    orders = []
    clickedOrder = []
}


let playGame = ()=>{
    alert("Bem vindo ao jogo !")
    score = 0
    nextlevel()
}

parar.onclick = ()=>{

        alert(`Pontuação: ${score}`)

       reset()

}



iniciar.onclick = ()=>{

    if(iniciar.innerHTML.trim()=="Iniciar"){
        iniciar.innerHTML= "Reiniciar";
        
        playGame()

        parar.style.display="inline-block"
    }
    else{
        orders = []
        clickedOrder = []
        playGame()

    }
}

green.onclick = ()=>{
    click(3)
}

red.onclick = ()=>{
    click(1)
}

yellow.onclick = ()=>{
    click(2)
}

blue.onclick = ()=>{
    click(0)
}







