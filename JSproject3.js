const reviews = [
    {
        name: 'Adam Connor',
        job:'ui/ux Designer',
        notes:'Films succeed in evoking responses and engaging audiences only with a combination of well-written narrative and effective storytelling technique. It’s the filmmaker’s job to put this together.',
        img:"img/adam-connor.jpg",
    },
    {
        name:'Arman Ghosh',
        job:'Data Analyst',
        notes:'Perception influences decisions, especially when it comes to selling products and services. Learn why before you even start sales conversations; good, thoughtful design and presentation will define you and your ability to close deals.',
        img:"img/arman-ghosh.jpg"

    },
    {
        name:'Bermon Painter',
        job:'Full Stack',
        notes:'Rapid prototyping with HTML, CSS, and JavaScript is even better and faster; it increases collaboration and improves the iteration process. Kill your wireframes. Long live rapid prototyping',
        img:"img/bermon-painter.jpg"
    },
    {
        name:'Shay Howe',
        job:'Backend Developer',
        notes:'As a designer and front-end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties which he regularly writes and speaks about.',
        img:"img/shay-howe.jpg" 
    }
]
const image = document.getElementById('image');
const notes = document.querySelector('.notes');
const name = document.querySelector('.name');
const title = document.querySelector('.title');

const nextbtn=document.querySelector('.nextbtn');
const prevbtn= document.querySelector('.prevbtn');
const randombtn= document.querySelector('.randombtn');

let currentReview = 0;

const windowDisplay =()=>{
    const items =reviews[currentReview];
    image.src = items.img;
    title.textContent= items.job;
    notes.textContent=items.notes;
    name.textContent= items.name; 
}
window.addEventListener('DOMContentLoaded',windowDisplay);

nextbtn.addEventListener('click',()=>{
  currentReview++;
  if(currentReview>= reviews.length){
    currentReview= 0;
  }
 
  windowDisplay();
});

prevbtn.addEventListener('click',()=>{
    currentReview--;
    if(currentReview < 0){
        currentReview=reviews.length-1;
    }
    
    windowDisplay();
});

randombtn.addEventListener('click',()=>{
    currentReview = randomProfile();
    windowDisplay();
    console.log(currentReview);
})
randomProfile=()=>{
    return Math.floor(Math.random()*reviews.length);
};