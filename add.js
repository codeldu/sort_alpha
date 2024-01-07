let sub = document.querySelector('#sub');
let errName = document.querySelector('#nameErr')


console.log(sub);
sub.addEventListener('click',()=>{
    
    let nameVal = document.querySelector('#name').value;
    let surnameVal = document.querySelector('#name').value;

    let obj = {
        first_name : nameVal,
        last_name : surnameVal
    }

    if(!nameVal){
        errName.style.display = 'block'
    }

    console.log("a");
    
})