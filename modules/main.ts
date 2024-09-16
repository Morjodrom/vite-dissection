import './main.css';
import creditsUrl from './images/credits.txt';
import credits from './images/credits.txt?raw';
import realistic from './images/realistic.jpg';
import simpleVector from './images/simple-vector.svg';
import uncommonContent from './assets/uncommon-extension.etxt?raw'

console.log("Hello, vite!");
console.log('fileUrl', creditsUrl);
console.log('fileContent', credits);
console.log(uncommonContent)

let app = document.getElementById('app');
let realisticImg = new Image(100);
realisticImg.src = realistic;
app!.appendChild(realisticImg);

let svgImg = new Image(100);
svgImg.src = simpleVector;
app!.appendChild(svgImg);
