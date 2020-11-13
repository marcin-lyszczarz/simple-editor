import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text = document.querySelector('.textarea');
const btnLoad = document.querySelector('.load--js');
const btnSave = document.querySelector('.save--js');

const entry = localStorage.getItem('entry');

btnLoad.addEventListener('click', ()=>{
    text.value = localStorage.getItem('entry');
});

btnSave.addEventListener('click', ()=>{
    localStorage.setItem('entry', text.value);
    text.value = '';
});