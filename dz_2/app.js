const big = document.querySelector('.big')
const small = document.querySelector('.small')

let x = 0
let y =0
let start  = false

const move=()=>{
    start =true
    if(x<900 && y===0){
        x+=10
        small.style.left =   `${x}px`
        setTimeout(move,10)
    }else if(x===900 && y<900){
        y+=10
        small.style.top =   `${y}px`
        setTimeout(move,10)
    }else if(y===900 && x>0){
        x-=10
        small.style.left =  `${x}px`
        setTimeout(move,10)
    }else if(x===0 && y!==0){
        y-=10
        small.style.top =  `${y}px`
        setTimeout(move,10)
    }

}
move()
let sec = 0
const startedGame=()=>{
    if(start===true){
      const timer=   setInterval(()=>{  
            if(sec<60){
                sec++
                console.log(sec)
            }else{
                clearInterval(timer)
            }
        },1000)
    }
}
startedGame()