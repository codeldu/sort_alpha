let wrapper = document.querySelector('.wrapper');
let sort = document.querySelector('#sort');


let data = [];

fetch('http://localhost:3000/api')
    .then(r => r.json())
    .then(d => {
        data = d;
        printData();
    })

const printData = () => {
    wrapper.innerHTML = ''
    data.forEach((el) => {
        wrapper.innerHTML += `<h1>${el?.first_name}</h1>`
    })
}

sort.addEventListener('change', (e) => {
    let dataClone = [...data]
    if (e.target.value == 'az') {
        let sorted_az = dataClone.sort((a, b) => a.first_name.localeCompare(b.first_name));
        wrapper.innerHTML = '';
        sorted_az.forEach((el) => {
            wrapper.innerHTML += `<h1>${el?.first_name}</h1>`
        })
    } else if (e.target.value == 'za') {
        let sorted_za = dataClone.sort((a, b) => b.first_name.localeCompare(a.first_name));
        wrapper.innerHTML = ''
        sorted_za.forEach((el) => {
            wrapper.innerHTML += `<h1>${el?.first_name}</h1>`
        })
    }else{
        printData();
        
    }
})

