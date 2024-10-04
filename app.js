const signupForm  = document.querySelector('#signup-form');
const userName = document.querySelector('#username')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(userName.value);
    
    
    
})