// const minus = document.querySelector('.minus');
// const pilus = document.querySelector('.pilus');
// const num = document.querySelector('.num');


// pilus.addEventListener('click', (e)=>{
//     e++
// })

// const minus = document.querySelector('.minus');
// const pilus = document.querySelector('.pilus');
// const num = document.querySelector('.num');

// let count = 0;

// pilus.onclick = () => {
//     count++;
//     num.textContent = count;
// }

// minus.onclick = () => {
//     count--;
//     num.textContent = count;
// }


const minus = document.querySelector('.minus');
const pilus = document.querySelector('.pilus');
const num = document.querySelector('.num');

let count = 0;

// Qiymatni yangilash funktsiyasi
const updateDisplay = () => {
    num.textContent = count;
};

// Qo'shish funksiyasi
pilus.addEventListener('click', () => {
    count++;
    updateDisplay(); // Yangilanishi
});

// Ayrish funksiyasi
minus.addEventListener('click', () => {
    count--;
    updateDisplay(); // Yangilanishi
});
