const div1 =document.querySelector('.div-1');
const alink =document.querySelector('.a-link');
const blink =document.querySelector('.b-link');
const div4 =document.querySelector('.div-4');
alink.onclick = () => {
    div1.classList.add('active');
}
blink.onclick = () => {
    div1.classList.remove('active');
}