import videoPausePlay  from './modules/videoLaunch.js';
import {closeForm, openForm} from './modules/closeOpenForm.js';
import formSend from './modules/formSend.js';
import moveCookie from './modules/buttonModule.js';

window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('form');
  
  form.addEventListener('submit', formSend);


  videoPausePlay();
  openForm();
  closeForm();
  moveCookie();
});
