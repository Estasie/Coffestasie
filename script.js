window.addEventListener("DOMContentLoaded", () => {
  let blockInfo = document.querySelectorAll(".container__block");
  let form = document.querySelector("#emploersForm");
  let emploersBlock = document.querySelector("#emploers");
  let cookieButton = document.querySelector(".form__button");

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

  let moveStep = 0;
  let wdth = screen.width - 500;
  let reverse = false;

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
          }, 1000);
          
        } else {
          setTimeout(function () {
            e.target.classList.remove("_active");
            e.target.innerHTML = "Отправить";
          }, 505);
          
        }
        
      });
      

      
      
    });
  }

  videoPausePlay();
  openForm();
  moveCookie();
});
