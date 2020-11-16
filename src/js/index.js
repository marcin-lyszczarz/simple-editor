import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const text = document.querySelector('.textarea--js');
const btnLoad = document.querySelector('.load--js');
const btnSave = document.querySelector('.save--js');
const btnDelete = document.querySelector('.delete--js');




btnLoad.addEventListener('click', ()=>{
    text.value = localStorage.getItem('entry');
});

btnSave.addEventListener('click', ()=>{
    localStorage.setItem('entry', text.value);
    const currentValue = localStorage.getItem('entry');
    text.value = '';
    if(currentValue){
        document.querySelector('.info--js').innerHTML = '!!!';
    }else{
        document.querySelector('.info--js').innerHTML = '';
    }
});

btnDelete.addEventListener('click', () => {
    const currentValue = localStorage.getItem('entry');
    if(currentValue){
        localStorage.setItem('entry', text.value = '');
        document.querySelector('.info--js').innerHTML = '';
    }
});
