let btn = document.querySelector('.article__btn');
let show = document.querySelector('.article__share');

btn.addEventListener('click', function(){
    show.classList.toggle('article__share--active');
})