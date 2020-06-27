function getting_number(num){
    var result = document.getElementById("btn")
    result.value += num
}

function clear_result(){
    var result = document.getElementById("btn");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("btn");
    result.value = eval(result.value)
}