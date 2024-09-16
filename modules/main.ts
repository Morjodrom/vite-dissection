import './main.css';
import simpleVector from './images/simple-vector.svg';

console.log('Base url', import.meta.env.BASE_URL);

console.log("Hello, vite!");

let img = new Image(50);
img.src = simpleVector;
img.style.display = 'block';
document.body.appendChild(img);