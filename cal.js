
let string = '';
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector("input")
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == "=") {
                string = eval(string);
                input.value = string;
            } else if (e.target.innerHTML == 'Ac') {
                string = '';
                input.value = string;

            } else if (e.target.innerHTML == 'x') {
                string = '';
                input.value = string;

            }
            else {
                string = string + e.target.innerHTML;
                input.value = string;
            }
        } catch {
            console.log('this is wrong')
        }
    })
})



