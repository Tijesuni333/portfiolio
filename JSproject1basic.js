const colors = ['red','blue','green','#000000','rgba(85, 122, 10, 0.911)','yellow'];
// console.log(colors.length);
const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click',()=>{

    color.innerText= colors[randomColor()];
    document.body.style.backgroundColor=colors[randomColor()];
});
randomColor=()=>{
    return Math.floor(Math.random()*colors.length);
};