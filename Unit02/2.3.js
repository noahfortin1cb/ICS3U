let x = 9000000

function scope(){
    console.log(x)
    x = 19203
    console.log(x)
}

function scorpe(x){
    console.log(x)
}

scope()
scorpe(5)