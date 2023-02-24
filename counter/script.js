let count = 0;
let number = document.querySelector('#value')
let dec_btn = document.querySelector('#decrease')
let res_btn = document.querySelector('#reset')
let inc_btn = document.querySelector('#increase')

if(count < 0){
    number.style.color = 'red'
}
// number.style.color = 'black'

dec_btn.addEventListener("click",decrease)
inc_btn.addEventListener("click",increase)
res_btn.addEventListener("click",reset)

// 


function increase(){
    count+=1
    if (count > 0) {
        value.style.color = "green";
    }
    return number.textContent = count
}
function decrease(){
    count-=1
    if (count < 0) {
        value.style.color = "red";
    }
    return number.textContent = count
    
}
function reset(){
    count = 0
    if (count === 0) {
        value.style.color = "#112942";
    }
    return number.textContent = count
}