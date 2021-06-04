const button = document.querySelector('#btn')
const inputs = document.querySelectorAll('.input')
const messages = document.querySelectorAll('.message')

button.addEventListener('mousedown', mouseDown)
button.addEventListener('mouseup', mouseUp)
function mouseDown(){
    button.style.backgroundColor = 'hsl(154, 40%, 51%)'
}

function mouseUp(){
    button.style.backgroundColor = 'hsl(154, 59%, 51%)'
}

button.addEventListener('click', error)

function error(ev){
    ev.preventDefault()
    inputs.forEach(input => {
        if(input.value === '' ){
            input.classList.add('error')
            let elName = input.getAttribute('name')
            input.setAttribute('placeholder', `${elName} cannot be empty`)
            
        }else{
            input.classList.remove('error')
            let elName = input.getAttribute('name')
            input.setAttribute('placeholder', elName)

        }

        if(!input.value){
            input.style.border = 'solid 1px hsl(0, 100%, 74%) '
        }else{
            input.style.border = 'solid 1px hsl(154, 59%, 51%)'

        }

    })
}
        
            
            

           

console.log([...inputs])