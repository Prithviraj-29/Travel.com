const header=document.querrySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY>60)
});