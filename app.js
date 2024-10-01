const button = document.querySelector('button');
const ul =  document.querySelector('ul')
const iteam = document.querySelectorAll('li');

button.addEventListener('click', ()=>{
    // ul.innerHTML += '<li></li>'
   const li =  document.createElement('li')
   li.textContent = ('sumtheng new text 😊')
   ul.prepend(li)
   
})


// iteam.forEach((iteam)=>{
//     iteam.addEventListener('click',(e)=>{
       
//         // e.target.remove()
//         console.log("clicked li");
//         e.stopImmediatePropagation()
        
//     })
// })


ul.addEventListener('click', (e)=>{
    if(e.target.nodeName == 'LI'){
        e.target.remove()
    }
})
