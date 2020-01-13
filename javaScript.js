function get(val) 
{ 
    document.getElementById("result").value+=val 
}
//The eval() function evaluates or executes an expression.
function ans() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
}
function clr() 
{ 
    document.getElementById("result").value = "" 
} 