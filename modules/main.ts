import './main.css';
import creditsUrl from './images/credits.txt';
import credits from './images/credits.txt?raw';
import realistic from './images/realistic.jpg';
import simpleVector from './images/simple-vector.svg';
import uncommonContent from './assets/uncommon-extension.etxt?raw'
import jsAsUrl from './assets/as-plain-text.js?url';
import jsAsText from './assets/as-plain-text.js?raw';

console.log("Hello, vite!");
console.log('fileUrl', creditsUrl);
console.log('fileContent', credits);
console.log(uncommonContent)
console.log('Js as url ', jsAsUrl);
console.log('Js as text ', jsAsText);

let app = document.getElementById('app');
let realisticImg = new Image(100);
realisticImg.src = realistic;
app!.appendChild(realisticImg);

let svgImg = new Image(100);
svgImg.src = simpleVector;
app!.appendChild(svgImg);

console.log('%cUsage of import.meta.url(%s)', 'background: #222; color: #bada55;', import.meta.url);
let url = new URL('./some-same-folder-file.jpg', import.meta.url);
console.log(url);