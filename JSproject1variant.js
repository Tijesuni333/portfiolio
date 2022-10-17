const colors= ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click',()=>{
    randomCombo ='#';
    for(i=0;i<6;i++){
        randomCombo +=colors[randomNumber()];
    }
    color.innerText= randomCombo;
    document.body.style.backgroundColor= randomCombo;
});
randomNumber =()=>{
    return Math.floor(Math.random()*colors.length);
};
