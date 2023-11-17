//! -------------События клавиатуры ===
//todo----------------------------------------
//? keydown; возникает при нажатии клавиатуры и длится, пока нажата клавиатура.
window.addEventListener('keydown', (event)=>{
    window.style.backgroundColor = 'red'
});
//todo===================================================
//? keyup; возникает при отпускании клавиши клавиатуры.
// window.addEventListener('keyup', (event)=>{
//     console.log(event);
// });
//todo--------------------------------------------------
//? Submit; 
let form = document.querySelector('form');
let inpForm = document.querySelectorAll('form input');
let btn1 = document.querySelector("#btn1");
let img = document.querySelector('form img');
console.log(inpForm);
btn1.addEventListener('click', ()=>{
    form.style.display = "block";
});
img.addEventListener('click', ()=>{
    form.style.display = 'none';
});
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);
    inpForm.forEach((elem)=>{
elem.value = '';
    });
    form.style.display = 'none';
});
//?===========================================================

