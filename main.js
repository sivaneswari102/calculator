let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let result = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
            if(e.target.innerHTML== '=') {
                if(result != "") {
                    result = eval(result);
                    input.value=result;
                }
            }
            else if(e.target.innerHTML == 'AC') {
                result = "";
                input.value=result;
            }
            else if(e.target.innerHTML == 'DEL') {
                result=result.substring(0, result.length)
                input.value=result;
            }
            else {
                result += e.target.innerHTML;
                input.value=result;
            }
    })
})