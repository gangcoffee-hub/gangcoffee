const humberger = document.getElementById("humberger");
const navList = document.getElementById("nav-list")

humberger.addEventListener('click', function(){
    navList.classList.toggle('active');
})