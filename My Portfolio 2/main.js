

    /*================ menu button =============*/

const menuBtn = document.querySelector('#menu-btn');
const classBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
//  show menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  classBtn.style.display = 'inline-block';
})
//  hide menu
classBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  classBtn.style.display = 'none';
})


//  READ MORE BUTTON

document.querySelector("#read-more").addEventListener("click",function() {
    document.querySelector(".read-more-content").classList.toggle("show-read-more");
});



// SHOW/HIDE SKILLS IMENS
const skillItems = document.querySelectorAll('section.sklls .slill');

skillItems.forEach(slill => {
  slill.querySelector('.head').addEventListener('click', () => {
    slill.querySelector('.items').classList.toggle('show-items')
  })
})

// add box shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 0)
})