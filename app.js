
const showbtn = document.getElementById('show-btn');
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')

showbtn.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden')
})
