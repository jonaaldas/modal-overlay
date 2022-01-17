let overlay = document.querySelector('.overlay');
let btn  = document.querySelector('.btn').addEventListener('click', function(){
    // document.querySelector('.overlay').hidden = true;
    overlay.style.visibility = 'visible'
})

let close = document.querySelector('.close').addEventListener('click', function(){
    overlay.style.visibility = 'hidden'
})