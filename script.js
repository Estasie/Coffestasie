window.addEventListener("DOMContentLoaded", () => {
  let blockInfo = document.querySelectorAll(".container__block");
  let form = document.querySelector("#emploersForm");
  let emploersBlock = document.querySelector("#emploers");
  let cookieButton = document.querySelector(".form__button");
  let backButton = document.querySelector('.form__back');

  function videoPausePlay() {
    for (let elem of blockInfo) {
      let video = document.querySelectorAll("#videoPlay");
      video.forEach((el) => {
        elem.addEventListener("mouseover", () => {
          el.play();
        });
        elem.addEventListener("mouseout", () => {
          el.pause();
        });
      });
    }
  }

  function openForm() {
    emploersBlock.addEventListener("click", () => {
      emploersBlock.classList.add("hidden");
      form.classList.remove("hidden");
      form.classList.add("flex");
    });
  }

  function closeForm(){
    backButton.addEventListener('click', () => {
      emploersBlock.classList.remove("hidden");
      form.classList.add("hidden");
      form.classList.remove("flex");
    });
  }

  // function openInNewTab(url) { let win = ***(url, '_blank'); win.focus(); } 
  function moveCookie() {
    cookieButton.addEventListener("click", (e) => {
      e.preventDefault();
      let checkButtonClasses = e.target.classList.contains("_active");
      let cookie = document.querySelector(".cookie");
      let promiseForCookie = new Promise(() => {
        if(!checkButtonClasses){
          
          setTimeout(function () {
            e.target.classList.add("_active");
            e.target.innerHTML = "";
            cookie.classList.add("active__cookie");
          }, 501);
          setTimeout(function () {
            cookie.style.left = 300 + 'px';
            cookie.style.top = -Math.pow(5,2) + 'px';
          }, 1500);
          
        } else {
          setTimeout(function () {
            e.target.classList.remove("_active");
            e.target.innerHTML = "Отправить";
          }, 505);
          
        }
        
      });
      
      console.log(promiseForCookie);
      promiseForCookie.then(()=>{

      });
      
    });
  }

  videoPausePlay();
  openForm();
  closeForm();
  moveCookie();
});
