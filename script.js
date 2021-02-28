import videoPausePlay  from './modules/videoLaunch.js';
import {closeForm, openForm} from './modules/closeOpenForm.js';


import form from './modules/postData.js';

window.addEventListener("DOMContentLoaded", () => {
  
  // form.addEventListener('submit', postData);




  videoPausePlay();
  openForm();
  form();
  closeForm();
});
