window.addEventListener("DOMContentLoaded", () => {
  let blockInfo = document.querySelectorAll(".container__block");
  let form = document.querySelector("#emploersForm");
  let emploersBlock = document.querySelector("#emploers");
  let cookieButton = document.querySelector('.form__button');

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

  function openForm(){
    emploersBlock.addEventListener("click", () => {
        emploersBlock.classList.add("hidden");
        form.classList.remove("hidden");
        form.classList.add("flex");
      });
  }
  
  let moveStep=0;
  let wdth = screen.width - 500;
  let reverse = false;

  function moveCookie(){
    let stop;
    let progr = 0;
    let button = document.querySelector('.form__button');
    function moveCook(timestamp){
        if(progr > 350) {
            cancelAnimationFrame(stopId);
            return;
        } else {
            progr = progr +3;
            button.style.left = progr + "px";
            stopId= window.requestAnimationFrame(step);
        }
    }
      window.requestAnimationFrame(step);
  }

  
  

  videoPausePlay();
  openForm();
  moveCookie();


});
