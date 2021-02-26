window.addEventListener("DOMContentLoaded", () => {
  let blockInfo = document.querySelectorAll(".container__block"),
      formContainer = document.querySelector("#emploersForm"),
      emploersBlock = document.querySelector("#emploers"),
      cookieButton = document.querySelector(".form__button"),
      backButton = document.querySelector('.form__back'),
      form = document.getElementById('form'),
      elemValid = document.querySelector('.form__item'),
      backgroundVideos = document.querySelectorAll('#videoPlay');


      

      console.log(elemValid);


  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault(); 

    // let formedData = new formedData(form);
     

    let error = formValidate(form);

    if(error === 0){
      moveCookie();
      // let resp = await fetch('', {
      //   method: 'POST', 
      //   body: formedData
      // });

      // if(resp.ok){
      //   let res = await resp.json();
      //   alert(res.messsage);
      //   form.reset(); 
      // }
    } else {
      alert('Error');
    }
  }

  function videoPausePlay(){
    blockInfo.forEach(el => {
      el.addEventListener('mouseover', function() {
        if(this.classList.contains('flex')){
          return;
        }else {
          this.querySelector('video').play();
        } 
      });
      el.addEventListener('mouseleave', function() {
        if(this.classList.contains('flex')){
          return;
        }else {
          this.querySelector('video').pause();
        }
      });
    })
  }

  



  function openForm() {
    emploersBlock.addEventListener("click", () => {
      emploersBlock.classList.add("hidden");
      formContainer.classList.remove("hidden");
      formContainer.classList.add("flex");
    });
  }

  function closeForm(){
    backButton.addEventListener('click', () => {
      emploersBlock.classList.remove("hidden");
      formContainer.classList.add("hidden");
      formContainer.classList.remove("flex");
    });
  }


  function formValidate () {
    let error = 0;
    let formReq = document.querySelectorAll('._req');


    for (let i=0; i< formReq.length; i++){
      const input = formReq[i];
      formRemoveError(input);

      if(input.classList.contains('_email')){
        if(!emailTest(input)){
          formAddError(input);
         
          error++;
        }
      } else if(input.getAttribute("type") === "checkbox" && input.checked === false){
        formAddError(input);
        error++;
      } else {
        if(input.value === ''){
          formAddError(input);
          error++;
        }
      }

    }
    return error;
  }

  function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
    input.parentElement.classList.remove('_valid');
    input.classList.remove('_valid');
  }

  function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    input.parentElement.classList.add('_valid');
    input.classList.add('_valid');
  }



  // Тест email-a

  function emailTest(input){
    return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value));
   
  }

  // function openNewTab(){
  //   document.getElementById("menu__enter").onclick = function()
  // {
  // document.location.href = "http://127.0.0.1:5500/menu.html";
  // } 
  // }
  
  function moveCookie() {
    cookieButton.addEventListener("click", () => {
      let checkButtonClasses = cookieButton.classList.contains("_active");
      let cookie = document.querySelector(".cookie");
        if(!checkButtonClasses){
          
          setTimeout(function () {
            cookieButton.classList.add("_active");
            this.innerHTML = "";
            cookie.classList.add("active__cookie");
          }, 501);
          setTimeout(function () {
            cookie.style.left = 280 + 'px';
            cookie.style.top = -Math.pow(7,2) + 'px';
          }, 1500);
          
        } else {
          setTimeout(function () {
            cookieButton.classList.remove("_active");
            this.innerHTML = "Отправить";
          }, 505);
          
        }
        
      
      
      
    });
  }




  videoPausePlay();
  openForm();
  closeForm();
  // moveCookie();
});
