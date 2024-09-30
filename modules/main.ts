import './main.css';
import {subtract} from './subtract.js'
import {calculate} from "./calculate";
import {sum} from './sum.js'

console.log('Base url', import.meta.env.BASE_URL);

console.log("Hello, vite!");

console.log('Calculating... ', calculate(1, 2, subtract));
console.log('Calculating... ', calculate(1, 2, sum));