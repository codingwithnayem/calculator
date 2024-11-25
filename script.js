let input = document.querySelector('input');
let AllBtn = document.querySelectorAll('button');


function calculate(e){
let btnValue = e.target.innerText;

if(btnValue=='='){
  let calculate =eval(input.value);
  input.value=calculate;

}else if(btnValue =='AC'){
    input.value = ''
}else if(btnValue=='DEL'){
    let del =input.value.slice(0,input.value.length-1);
    input.value=del
}
else {
    input.value+=btnValue;
}if(input.value =='undefined'){
 input.value=''
}
}
AllBtn.forEach(btn=>{
    btn.addEventListener('click',calculate)
})